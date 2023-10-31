let io = undefined;
let gameNamespace = undefined;
let services = undefined;
let logger = undefined;

/*
{
    user,
    socket
}
*/
const socketInfo = new Map();
const gameNamespaceInfo = new Map();

const getUserBySocketId = (map, id) => {
  for (let [key, value] of map.entries()) {
    if (value.socket.id === id) {
      return value;
    }
  }
  return undefined;
};

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3001",
        credentials: true,
      },
    });
    gameNamespace = io.of("/game");
    io.use(async (socket, next) => {
      logger.warn("!!!!!!!!!!!!!!!! middle");
      const token = socket.handshake.query.token;
      const user = await services.auth.verify(token);
      if (user) {
        socketInfo.set(user.id, {
          user,
          socket,
        });
        logger.info(`socket: user ${user.id} authenticated`);
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });
    gameNamespace.use(async (socket, next) => {
      const token = socket.handshake.query.token;
      logger.info(`_TEST_ ${token}`);
      logger.info(`HEADER ${JSON.stringify(socket.handshake)}`);
      const user = await services.auth.verify(token);
      if (user) {
        gameNamespaceInfo.set(user.id, {
          user,
          socket,
        });
        logger.info(`gameNamespace: user ${user.id} authenticated`);
        next();
      } else {
        logger.error("NOWAY");
        logger.error(`TOKEN ${token}`);
        next(new Error("Authentication error"));
      }
    });
    io.on("connection", (socket) => {
      const userInfo = getUserBySocketId(socketInfo, socket.id);
      logger.info(`User ${userInfo.user.username} connected`);
      socket.on("disconnect", () => {
        logger.info("Client disconnected");
        socketInfo.delete(socket.id);
      });
    });
    gameNamespace.on("connection", (socket) => {
      const userInfo = getUserBySocketId(gameNamespaceInfo, socket.id);
      logger.info(`User ${userInfo.user.username} connected to gameNamespace`);
      socket.on("disconnect", () => {
        logger.info("User disconnected from gameNamespace");
        gameNamespaceInfo.delete(socket.id);
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
