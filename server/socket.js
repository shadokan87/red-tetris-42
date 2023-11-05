const { Tetris, TetrominoDispenser, getCurrentId } = require("./tetris");

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

const endVersusGame = (socket) => {
  const socketGame = getSocketGame(socket);
  if (!socketGame) return;
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
      (async () =>
        (savedGame = await services.game.saveVersusGame(
          socketGame.room.owner,
          socketGame.room.opponent,
          scores,
          winnerId
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
        gameNamespaceInfo.set(user.id, {
          user,
          socket,
        });
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });

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
      // socket.on("RegisterKeyStroke", (k) => {
      //   console.log(`KEY: ${k}`);
      //   if (!room) {
      //     console.log("DEBUG: room is not defined");
      //     return;
      //   }
      //   if (!tetrisInstances.has(room.id)) {
      //     console.log("DEBUG: tetrisInstances does not have room.id");
      //     return;
      //   }
      //   if (!soloInstance) {
      //     console.log("DEBUG: soloInstance is not defined");
      //     return;
      //   }
      //   if (!room.gameStarted) {
      //     console.log("DEBUG: game has not started");
      //     return;
      //   }
      //   soloInstance.RegisterKeyStroke(k);
      // });
      return soloInstance;
    };
    // Handle new connections and disconnections in the game namespace
    gameNamespace.on("connection", (socket) => {
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
