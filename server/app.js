import { authService } from "./services/auth";
import { roomService } from "./services/room";
import { userService } from "./services/user";
import { validateRoomCreation, verifyToken } from "./validators/index";

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { StatusCode } = require("status-code-enum");
const winston = require("winston");
const bodyParser = require("body-parser");

const { env } = process;

const app = express().use(bodyParser.json());

const PORT = env.SERVER_PORT || 3000;
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "red-tetris_okay" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
    new winston.transports.File({ filename: "warn.log", level: "warn" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
const prisma = new PrismaClient();
export const services = {
  user: new userService(prisma),
  auth: new authService(prisma, env.JWT_SECRET),
  room: new roomService(),
};
//# Game
app.post(
  "/game/room/create",
  verifyToken,
  validateRoomCreation,
  async (req, res) => {
    services.room.create(req.user.id, {
      name: req.body.name,
    });

    return res
      .status(StatusCode.SuccessCreated)
      .send("Room created successfully");
  }
);

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

app.listen(PORT, async () => {
  const users = await services.user.getAll();
  if (!users.length) {
    await services.user.create("username", "password", "test");
  }
  logger.info(`server is running on http://localhost:${PORT}`);
});
