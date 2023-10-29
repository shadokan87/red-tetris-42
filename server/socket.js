let io = undefined;
let services = undefined;
let logger = undefined;

/*
{
    user,
    socket
}
*/
const socketInfo = new Map();
module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3001",
        credentials: true,
      },
    });
    io.use(async (socket, next) => {
      const token = socket.handshake.query.token;
      const user = await services.auth.verify(token);
      if (user) {
        socketInfo.set(user.id, {
          user,
          socket,
        });
        logger.info(`socket: user ${user.username} authenticated`);
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });
    io.on("connection", (socket) => {
      logger.info("++++++++++++++++++++++++++=New client connected");
      const user = socketInfo.get(socket.id);
      logger.info(`User ${user.username} connected`);
      socket.on("disconnect", () => {
        logger.info("Client disconnected");
        socketInfo.delete(socket.id);
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
