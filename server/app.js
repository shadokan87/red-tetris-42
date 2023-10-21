const { PrismaClient } = require("@prisma/client");
import { userService } from "./services/user";
const express = require("express");
const app = express();
const PORT = 3000;
const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "my-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
    new winston.transports.File({ filename: "warn.log", level: "warn" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
const prisma = new PrismaClient();
const services = {
  user: new userService(prisma),
};

app.get("/", (req, res) => {
  res.send("hello world !");
});

app.post("/auth/login", async (req, res) => {
  const { usernName, password } = req.body;

  const user = await services.user.findByUserName("username");
  return res.status(200).json({ message: "user", data: user });
});

app.listen(PORT, async () => {
  const users = await services.user.getAll();
  if (!users.length) {
    await services.user.create("username", "password", "test");
  }
  console.log("!!! users", users);
  console.log(`server is running on http://localhost:${PORT}`);
});
