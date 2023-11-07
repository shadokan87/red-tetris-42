const { Tetris, TetrominoDispenser, getCurrentId } = require("./tetris");
const { Mutex } = require("async-mutex");
const mutex = new Mutex();

let io = undefined;
let gameNamespace = undefined;
let services = undefined;
let logger = undefined;

const socketInfo = new Map();
const gameNamespaceInfo = new Map();
const tetrisInstances = new Map();

const getUserBySocketId = (map, id) => {
  for (let [key, value] of map.entries()) {
    if (value.socket.id === id) {
      return value;
    }
  }
  return undefined;
};

const getSocketGame = (socket) => {
  const userInfo = getUserBySocketId(gameNamespaceInfo, socket.id);
  if (!userInfo) return undefined;
  const room = services.room.isInRoom(userInfo.user.id);
  if (!room) return undefined;
  const instance = tetrisInstances.get(room.id);
  if (!instance) return undefined;
  return { instance, userInfo, room };
};

const getPlayerData = (socket) => {
  const userInfo = getUserBySocketId(gameNamespaceInfo, socket.id);
  const room = services.room.isInRoom(userInfo.user.id);
  console.log(`DEBUG ROOM ${JSON.stringify(room)}`);
  const instance = tetrisInstances.get(room.id);
  const lobbySocket = socketInfo.get(userInfo.user.id);
  return {
    userInfo,
    room,
    instance,
    lobbySocket: (lobbySocket && lobbySocket.socket) || undefined,
  };
};

const endVersusGame = (socket, gameFail) => {
  const socketGame = getSocketGame(socket);
  if (!socketGame) return;
  if (gameFail) {
    const { room } = socketGame;
    if (socketGame.instance.owner) socketGame.instance.owner.stopGame();
    if (socketGame.instance.opponent) socketGame.instance.opponent.stopGame();

    const updatedRoom = services.room.update(room.owner, (room) => {
      return {
        ...room,
        gameStarted: false,
        opponentReady: false,
      };
    });

    tetrisInstances.delete(room.id);
    const ownerLobbySocket = socketInfo.get(room.owner);
    const opponentLobbySocket = socketInfo.get(room.opponent);
    [ownerLobbySocket, opponentLobbySocket].forEach((s) => {
      if (s && s.socket) {
        s.socket.emit("roomUpdate", updatedRoom);
        s.socket.emit("gameFail");
      }
    });
    console.log(`GAME_FAIL: CLEARED INSTANCES FOR ROOM ${room.id}`);
    return;
  }
  const allInstances = [
    socketGame.instance.owner,
    socketGame.instance.opponent,
  ];
  logger.info(`INSTANCES ${JSON.stringify(allInstances)}`);
  let scores = allInstances.map((s) => s.getScore());
  scores[0].points = 100;
  const noWinner = scores[0].points == 0 && scores[1].points == 0;
  let savedGame = undefined;

  if (!noWinner) {
    const winnerId =
      scores[0].points > scores[1].points
        ? socketGame.room.owner
        : socketGame.room.opponent;
    try {
      const { scoreLimit } = socketGame.room;
      (async () =>
        (savedGame = await services.game.saveVersusGame(
          socketGame.room.owner,
          socketGame.room.opponent,
          scores,
          winnerId,
          scoreLimit
        )))();
    } catch (error) {
      console.error("ERR_SAVE_GAME", error);
    }
  }
  const ownerLobbySocket = socketInfo.get(socketGame.room.owner);
  const opponentLobbySocket = socketInfo.get(socketGame.room.opponent);
  const allLobbySocket = [
    (ownerLobbySocket && ownerLobbySocket.socket) || undefined,
    (opponentLobbySocket && opponentLobbySocket.socket) || undefined,
  ];
  // const updatedRoom =
  const opponentUserId =
    socketGame.room.owner == socketGame.userInfo.user.id
      ? socketGame.room.opponent
      : socketGame.room.owner;
  const opponentSocket = gameNamespaceInfo.get(opponentUserId);
  const allSocket = [socket, opponentSocket.socket];
  allInstances.forEach((i) => i.stopGame());
  const updatedRoom = services.room.update(socketGame.room.owner, (room) => {
    return { ...room, gameStarted: false, opponentReady: false };
  });
  allSocket.forEach((s) => {
    s && s.emit("gameOver", updatedRoom);
  });
  tetrisInstances.delete(socketGame.room.id);
};

module.exports = {
  init: (httpServer) => {
    // Initialize socket.io with the httpServer and cors options
    io = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3001",
        credentials: true,
      },
    });
    // Create a namespace for game related sockets
    gameNamespace = io.of("/game");
    // Middleware for authenticating users
    io.use(async (socket, next) => {
      const token = socket.handshake.query.token;
      const user = await services.auth.verify(token);
      if (user) {
        socketInfo.set(user.id, {
          user,
          socket,
        });
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });
    // Handle new connections and disconnections
    io.on("connection", (socket) => {
      const userInfo = getUserBySocketId(socketInfo, socket.id);
      socket.on("disconnect", () => {
        socketInfo.delete(socket.id);
      });
    });
    // Middleware for authenticating users in the game namespace
    gameNamespace.use(async (socket, next) => {
      const token = socket.handshake.query.token;
      const user = await services.auth.verify(token);
      if (user) {
        console.log(`GAMENAMESPACE USER ${user.username}`);
        gameNamespaceInfo.set(user.id, {
          user,
          socket,
        });
        next();
      } else {
        console.log("FAILED TO AUTH USER");
        next(new Error("Authentication error"));
      }
    });

    function emitToPlayer(userId, header, ...args) {
      const gameSocket = gameNamespaceInfo.get(userId);
      if (!gameSocket) {
        console.log(`ERR_SOCKET_EMIT ${userId}`);
        return;
      }
      gameSocket.socket.emit(header, ...args);
    }
    function emitToPlayerVolatile(userId, header, ...args) {
      const gameSocket = gameNamespaceInfo.get(userId);
      if (!gameSocket) {
        console.log(`ERR_SOCKET_EMIT userId: ${userId} header: ${header}`);
        return;
      }
      gameSocket.socket.emit(header, ...args);
    }

    const createSoloInstance = (room, userInfo, socket) => {
      const gameOverCallback = () => {
        tetrisInstances.delete(room.id);
        const updatedRoom = services.room.update(room.owner, (room) => {
          return { ...room, gameStarted: false, opponentReady: false };
        });
        socket.emit("gameOver", updatedRoom);
        socket.disconnect();
      };

      const drawingDataCallback = (drawingData) => {
        socket.volatile.emit("data", drawingData);
      };

      const scoreCallback = (score) => {
        socket.emit("score", score);
      };

      const soloInstance = new Tetris(
        gameOverCallback,
        drawingDataCallback,
        scoreCallback
      );
      const dispenser = new TetrominoDispenser((sequence) =>
        soloInstance.appendSequence(sequence)
      );
      soloInstance.setTetrominoDispenser(dispenser);
      return soloInstance;
    };

    const createVersusInstance = (room, userInfo, socket) => {
      console.log(`CREATE INSTANCE`, userInfo.user.username);
      const gameOverCallback = () => {
        endVersusGame(socket);
      };

      const drawingDataCallback = (drawingData) => {
        emitToPlayerVolatile(userInfo.user.id, "data", drawingData);
      };

      const scoreCallback = (score) => {
        emitToPlayer(userInfo.user.id, "score", score);
        if (score.points >= room.scoreLimit) endVersusGame(socket);
      };

      const versusInstance = new Tetris(
        gameOverCallback,
        drawingDataCallback,
        scoreCallback
      );

      socket.on(
        "RegisterKeyStroke",
        (k) => versusInstance.gameStarted && versusInstance.RegisterKeyStroke(k)
      );
      return versusInstance;
    };
    // Handle new connections and disconnections in the game namespace
    gameNamespace.on("connection", async (socket) => {
      debugger;
      const { userInfo, room, instance, lobbySocket } = getPlayerData(socket);

      if (!room.gameStarted) return;
      if (room.solo) {
        const soloInstance = createSoloInstance(room, userInfo, socket);
        const id = soloInstance.getId();
        tetrisInstances.set(room.id, { owner: soloInstance.startGame() });
        const updatedRoom = services.room.update(room.owner, (room) => {
          return { ...room, gameStarted: true, opponentReady: false };
        });
        if (lobbySocket) {
          lobbySocket.emit("roomUpdate", updatedRoom);
          if (soloInstance)
            socket.on("RegisterKeyStroke", (k) =>
              soloInstance.RegisterKeyStroke(k)
            );
        }
      } else {
        const unlock = await mutex.acquire();
        try {
          console.log(`BREAKPOINT 1 ${userInfo.user.username}`);
          const role = room.owner == userInfo.user.id ? "owner" : "opponent";
          if (!instance) {
            console.log(`BREAKPOINT 2 ${userInfo.user.username}`);
            const versusInstance = createVersusInstance(room, userInfo, socket);
            let newInstance = {};
            newInstance[role] = versusInstance;
            tetrisInstances.set(room.id, newInstance);
            let countdown = 10;
            const intervalId = setInterval(() => {
              console.log(`CLANING BOT FOR ${room.id} in ${countdown} seconds`);
              countdown--;
            }, 1000);

            setTimeout(() => {
              clearInterval(intervalId);
              const retrieveGame = tetrisInstances.get(room.id);
              if (!retrieveGame.owner || !retrieveGame.opponent) {
                endVersusGame(socket, true);
              } else {
                console.log(`GAME CLEAR CANCEL FOR ${room.id}`);
              }
            }, 10000);

            console.log(`INIT FIRST PLAYER ${role}`);
          } else {
            if (instance[role]) return;
            console.log(`INIT SECOND PLAYER ${role}`);
            const versusInstance = createVersusInstance(room, userInfo, socket);
            let newInstance = { ...instance };
            newInstance[role] = versusInstance;

            const allInstances = [newInstance.owner, newInstance.opponent];
            const dispenser = new TetrominoDispenser((sequence) =>
              allInstances.forEach((instance, index) => {
                if (instance) instance.appendSequence(sequence);
                else {
                  console.log(`DBUG INDEX ${index} NOT FOUND [allInstances]`);
                }
              })
            );
            allInstances.forEach((instance, index) => {
              if (instance) {
                instance.setTetrominoDispenser(dispenser);
                instance.attachOnDrawing((data) => {
                  const spectre = data.filter(
                    (piece) => piece.kind == "spectre"
                  );
                  emitToPlayerVolatile(
                    index == 0 ? room.opponent : room.owner,
                    "spectre",
                    spectre
                  );
                });
                instance.startGame();
              } else {
                console.log(`DBUG INDEX ${index} NOT FOUND [allInstances 2]`);
              }
            });
            tetrisInstances.set(room.id, newInstance);
            socket.on("disconnect", () =>
              console.log(`ROLE ${role} DISCONNECTED`)
            );
          }
        } finally {
          unlock();
        }
        // if (instance.owner && instance.opponent) {
        //   socket.disconnect();
        //   return;
        // }
        // const role = room.owner == userInfo.user.id ? "owner" : "opponent";
        // if (instance["role"]) {
        //   socket.disconnect();
        //   return;
        // }
      }
    });

    return io;
  },
  setServices: (newServices) => {
    services = newServices;
    return io;
  },
  setLogger: (newLogger) => {
    logger = newLogger;
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }
    return io;
  },
  getSocketMap: () => {
    return socketInfo;
  },
};
