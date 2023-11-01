const { Tetris, TetrominoDispenser } = require("./tetris");

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

const endVersusGame = (socket) => {
  const socketGame = getSocketGame(socket);
  if (!socketGame) return;
  const allInstances = [
    socketGame.instance.owner,
    socketGame.instance.opponent,
  ];
  // const allLobbySocket = [
  //   socketInfo.get(socketGame.room.owner),
  //   socketInfo.get(socketGame.room.opponent),
  // ];
  // const updatedRoom =
  const opponentUserId =
    socketGame.room.owner == socketGame.userInfo.user.id
      ? socketGame.room.opponent
      : socketGame.room.owner;
  const opponentSocket = gameNamespaceInfo.get(opponentUserId);
  const allSocket = [socket, opponentSocket];
  allInstances.map((i) => i.stopGame());
  allSocket.map((s) => {
    s.emit("gameOver");
  });
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
    // Handle new connections and disconnections in the game namespace
    gameNamespace.on("connection", (socket) => {
      const userInfo = getUserBySocketId(gameNamespaceInfo, socket.id);
      const room = services.room.isInRoom(userInfo.user.id);
      const instance = tetrisInstances.get(room.id);

      if (!instance) {
        logger.info(`No tetris instance for room: ${room.id}, creating one.`);
        if (room.solo) {
          const soloInstance = new Tetris(
            () => {
              logger.info(`Tetris: gameOver for ${userInfo.user.username}`);
              tetrisInstances.delete(room.id);
            },
            (drawingData) => {
              socket.volatile.emit("data", drawingData);
            },
            (score) => socket.emit("score", score)
          );
          const dispenser = new TetrominoDispenser((sequence) =>
            soloInstance.appendSequence(sequence)
          );
          soloInstance.setTetrominoDispenser(dispenser);
          tetrisInstances.set(room.id, { owner: soloInstance.startGame() });
        } else {
          const firstInstance = new Tetris(
            () => {
              logger.info(`Tetris: gameOver for ${userInfo.user.username}`);
              tetrisInstances.delete(room.id);
            },
            (drawingData) => {
              socket.volatile.emit("data", drawingData);
            },
            (score) => socket.emit("score", score)
          );
          if (userInfo.user.id == room.owner)
            tetrisInstances.set(room.id, { owner: firstInstance });
          else tetrisInstances.set(room.id, { opponent: firstInstance });
        }
      } else {
        const firstInstance = instance.owner
          ? instance.owner
          : instance.opponent;
        const secondInstance = new Tetris(
          () => {
            logger.info(`Tetris: gameOver for ${userInfo.user.username}`);
            tetrisInstances.delete(room.id);
          },
          (drawingData) => {
            socket.volatile.emit("data", drawingData);
          },
          (score) => socket.emit("score", score)
        );
        if (instance.owner)
          tetrisInstances.set(room.id, {
            ...instance,
            opponent: secondInstance,
          });
        else
          tetrisInstances.set(room.id, { ...instance, owner: secondInstance });
        const allInstances = [firstInstance, secondInstance];
        const dispenser = new TetrominoDispenser((sequence) =>
          allInstances.map((instance) => instance.appendSequence(sequence))
        );
        allInstances.map((instance) => {
          instance.setTetrominoDispenser(dispenser).startGame();
        });
      }

      logger.info(
        `game: user ${userInfo.user.username} connected, room: ${JSON.stringify(
          room
        )}.`
      );
      socket.on("disconnect", () => {
        const socketGame = getSocketGame(socket);
        if (!socketGame) return;
        const { instance, userInfo, room } = socketGame;

        if (room.solo) {
          instance.owner.stopGame();
          tetrisInstances.delete(room.id);
          services.room.destroy(userInfo.user.id);
          logger.info(`cleared solo instance for ${userInfo.user.username}`);
        } else {
        }
        logger.info(`game: user ${userInfo.user} disconnected.`);
      });
      socket.on("RegisterKeyStroke", (k) => {
        const socketGame = getSocketGame(socket);
        if (!socketGame) return;
        const instanceIndex =
          socketGame.userInfo.user.id == socketGame.room.owner
            ? "owner"
            : "opponent";
        const instance = socketGame.instance[instanceIndex];
        instance && instance.RegisterKeyStroke(k);
      });
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
