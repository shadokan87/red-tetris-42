import { create } from "domain";
import { authService } from "./services/auth";
import { roomService } from "./services/room";
import { userService } from "./services/user";
import { validateRoomCreation, verifyToken } from "./validators/index";

const { env } = process;

const PORT = env.SERVER_PORT || 3000;
const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { StatusCode } = require("status-code-enum");
const winston = require("winston");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express()
  .use(bodyParser.json())
  .use(
    cors({
      origin: "http://localhost:3001",
      credentials: true,
    })
  );
const server = http.createServer(app);
const socket = require("./socket");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "red-tetris_okay" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
    new winston.transports.File({ filename: "warn.log", level: "warn" }),
    new winston.transports.File({ filename: "socket.log", level: "socket" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
//# Services
const prisma = new PrismaClient();
export let services = {};

/**
 * Adds a new service to the services object.
 * @param {string} name - The name of the service. This is used to index the service in the services object.
 * @param {function} newService - The constructor function for the service.
 * @param {...any} dependencies - The dependencies for the service.
 */
function addService(name, newService, ...dependencies) {
  services[name] = new newService(...dependencies);
}

addService("user", userService, prisma);
addService("room", roomService);
addService("auth", authService, prisma, services["user"], env.JWT_SECRET);

Object.freeze(services);
//# Game
app.post(
  "/game/room/create",
  verifyToken,
  validateRoomCreation,
  async (req, res) => {
    const createdRoom = services.room.create(req.user.id, {
      name: req.body.name,
      isPublic: req.body.isPublic,
      owner: req.user.id,
      solo: req.body.solo,
      gameStarted: false,
    });

    return res.status(StatusCode.SuccessCreated).json({
      message: "Room created successfully",
      room: createdRoom,
    });
  }
);

app.post("/game/start", verifyToken, async (req, res) => {
  const room = services.room.get(req.user.id);
  if (!room) {
    return res.status(StatusCode.ClientErrorNotFound).send("Room not found");
  }
  logger.warn(`ROOM ${JSON.stringify(room)}`);
  let result = {
    message: `game started`,
  };
  if (room.solo) {
    const updatedRoom = services.room.update(req.user.id, (room) => {
      return { ...room, gameStarted: true };
    });
    result["room"] = updatedRoom;
    const socketMap = socket.getSocketMap();
    const io = socket.getIO();
    [req.user.id].forEach((id) => {
      const userInfo = socketMap.get(id);
      if (userInfo) {
        userInfo.socket.emit("roomUpdate", result);
        logger.info("emit to" + id, result);
      } else logger.info("cannot emit, not connected" + id);
    });
  } else {
    if (!("opponent" in room)) {
      return res
        .status(StatusCode.ClientErrorBadRequest)
        .send("Game cannot start without an opponent");
    }
    const updatedRoom = services.room.update(req.user.id, (room) => {
      return { ...room, gameStarted: true };
    });
    result["room"] = updatedRoom;
    const socketMap = socket.getSocketMap();
    const io = socket.getIO();
    [room.opponent, req.user.id].forEach((id) => {
      const userInfo = socketMap.get(id);
      if (userInfo) {
        userInfo.socket.emit("roomUpdate", result);
        logger.info("emit to" + id, result);
      } else logger.info("cannot emit, not connected" + id);
    });
  }
  return res.status(StatusCode.SuccessOK).json(result);
});
app.post("/game/room/setReady", verifyToken, async (req, res) => {
  const room = services.room.isInRoom(req.user.id);
  if (!room) {
    return res
      .status(StatusCode.ClientErrorNotFound)
      .send("Room does not exist");
  }
  // Your code here
});

app.post(
  "/game/room/join/:displayname/:name",
  verifyToken,
  async (req, res) => {
    const displayname = req.params.displayname;
    const name = req.params.name;
    if (!displayname || !name) {
      return res
        .status(StatusCode.ClientErrorBadRequest)
        .send("Bad Request: name and displayname are required");
    }
    const user = await services.user.findByDisplayName(displayname);
    if (!user) {
      return res.status(StatusCode.ClientErrorNotFound).send("User not found");
    }
    if (!services.room.exist(user.id)) {
      return res
        .status(StatusCode.ClientErrorNotFound)
        .send("Room does not exist");
    }
    const room = services.room.get(user.id);
    const isAlreadyInRoom =
      ("opponent" in room && room.opponent == req.user.id) ||
      room.owner == req.user.id;
    if (isAlreadyInRoom)
      return res.status(StatusCode.SuccessOK).json({
        message: "Room joined successfully",
        room,
      });

    if (room.name != name) {
      return res
        .status(StatusCode.ClientErrorNotFound)
        .send("Room does not exist");
    }
    if (services.room.isRoomCrowded(user.id)) {
      return res
        .status(StatusCode.ClientErrorBadRequest)
        .send("Room is crowded");
    }

    const updatedRoom = services.room.addMember(user.id, req.user.id);
    const result = {
      message: `${req.user.displayname} has joined the room`,
      room: updatedRoom,
    };
    const socketMap = socket.getSocketMap();
    const io = socket.getIO();
    [user.id, req.user.id].forEach((id) => {
      const userInfo = socketMap.get(id);
      if (userInfo) {
        userInfo.socket.emit("roomUpdate", result);
        logger.info("emit to" + id, result);
      } else logger.info("cannot emit, not connected" + id);
    });
    return res.status(StatusCode.SuccessOK).json(result);
  }
);
app.get("/user/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await services.user.findById(id);
  if (!user) {
    return res.status(StatusCode.ClientErrorNotFound).send("User not found");
  }
  return res.status(StatusCode.SuccessOK).json(user);
});

app.get("/game/room/:userId?", verifyToken, async (req, res) => {
  const userId = req.params.userId || req.user.id;
  const room = services.room.get(userId);
  if (!room) {
    return res.status(StatusCode.ClientErrorNotFound).send("Room not found");
  }
  return res.status(StatusCode.SuccessOK).json(room);
});

app.get("/game/rooms/allPublic", verifyToken, async (req, res) => {
  const rooms = await services.room.getAllPublicRooms();
  return res.status(StatusCode.SuccessOK).json(rooms);
});

app.delete("/game/room/delete", verifyToken, async (req, res, next) => {
  if (!services.room.exist(req.user.id)) {
    return res.status(StatusCode.ClientErrorNotFound).send("Room not found");
  }
  services.room.destroy(req.user.id);
  return res.status(StatusCode.SuccessOK).send("Room deleted successfully");
});

//# Auth
app.post(
  "/auth/signup",
  async (req, res, next) => {
    const { username, password, displayname } = req.body;

    // validate input
    const errors = [];
    if (!username) {
      errors.push("username is required");
    } else if (username.length < 3 || username.length > 20) {
      errors.push("username must be between 3 and 20 characters long");
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      errors.push("username must contain only letters and numbers");
    }
    if (!displayname) {
      errors.push("displayname is required");
    } else if (displayname.length < 3 || displayname.length > 20) {
      errors.push("displayname must be between 3 and 20 characters long");
    } else if (!/^[a-zA-Z0-9]+$/.test(displayname)) {
      errors.push("displayname must contain only letters and numbers");
    }
    if (!password) {
      errors.push("password is required");
    } else {
      if (!/[A-Z]/.test(password)) {
        errors.push("password must contain at least one uppercase letter");
      }
      if (!/[!@#$%^&*(),.?":{}|<>+-]/.test(password)) {
        errors.push("password must contain at least one special character");
      }
      if (password.length < 8) {
        errors.push("password must be at least 8 characters long");
      }
    }

    // check if username and displayname already exist
    const userNameExist = await services.user.findByUserName(username);
    const displayNameExist = await services.user.findByDisplayName(displayname);
    if (userNameExist) {
      errors.push("username taken");
    }
    if (displayNameExist) {
      errors.push("displayname taken");
    }

    // return errors if any
    if (errors.length > 0) {
      return res
        .status(StatusCode.ClientErrorBadRequest)
        .json({ message: errors });
    }
    next();
  },
  async (req, res) => {
    const { username, password, displayname } = req.body;
    await services.user.create(username, password, displayname);
    return res.status(StatusCode.SuccessCreated).json({ message: "created" });
  }
);

app.get(
  "/auth/verifyToken",
  async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      console.log(req.headers);
      return res
        .status(StatusCode.ClientErrorUnauthorized)
        .json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const verified = await services.auth.verify(token);
    if (!verified) {
      return res
        .status(StatusCode.ClientErrorUnauthorized)
        .json({ message: "Failed to authenticate token" });
    }
    req.user = verified;
    next();
  },
  async (req, res) => {
    return res.status(StatusCode.SuccessOK).json({ message: "Token verified" });
  }
);

app.post(
  "/auth/signin",
  async (req, res, next) => {
    const { username, password, ...rest } = req.body;
    console.log("!login", req.body);
    if (Object.keys(rest).length > 0) {
      return res
        .status(StatusCode.ClientErrorBadRequest)
        .json({ message: "Invalid request parameters" });
    }
    const user = await services.user.findByUserName(username);
    if (!user || user.password !== password) {
      return res
        .status(StatusCode.ClientErrorUnauthorized)
        .json({ message: "Invalid username or password" });
    }
    req.user = user;
    next();
  },
  async (req, res) => {
    const { username, password } = req.user;
    const token = await services.auth.sign(username, password);
    return res.status(StatusCode.SuccessOK).json({ "access-token": token });
  }
);

app.get("/auth/user", verifyToken, async (req, res) => {
  return res.status(StatusCode.SuccessOK).json(req.user);
});

app.get("/", (req, res) => {
  return res.status(StatusCode.SuccessOK).json({ message: "Success" });
});

socket.setServices(services);
socket.setLogger(logger);
socket.init(server);
server.listen(PORT, async () => {
  const users = await services.user.getAll();
  if (!users.length) {
    await services.user.create("username", "password", "test");
  }
  logger.info(`server is running on http://localhost:${PORT}`);
});
