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
let knex = null;

app.get("/", (req, res) => {
  res.send("hello world !");
});

async function createDatabase() {
  logger.log("+++ Creating database +++");
  await knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("username").unique().notNullable();
      table.string("displayname").unique().notNullable();
      table.string("password").notNullable();
    })
    .then(() => {
      logger.info("User table created");
    })
    .catch((e) => {
      logger.error("Failed to create user table");
    });
}

async function initializeDatabase() {
  const { PG_CONNECTION_STRING } = process.env;
  try {
    knex = require("knex")({
      client: "pg",
      connection: PG_CONNECTION_STRING,
      searchPath: ["knex", "public"],
    });

    // Check database connection
    await knex.raw("SELECT 1").then(() => {
      Object.freeze(knex);
      logger.info("database initialized successfully");
    });

    await knex.schema.hasTable("user").then((exists) => {
      if (!exists) createDatabase();
      else console.log("user exist");
    });
  } catch (e) {
    logger.error("database connection failed");
  }
  return true;
}

app.listen(PORT, async () => {
  await initializeDatabase();
  console.log(`server is running on http://localhost:${PORT}`);
});
