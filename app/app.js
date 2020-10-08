"use strict";

const config = require("./server/config/config.json");
const { promisify } = require("util");
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const MysqlDatabaseProvider = require("./server/src/infrastructure/provider/mysql_database_provider");
const getApiRouter = require("./server/src/index.js");

(async () => {
  try {
    const app = express();
    const server = http.createServer(app);

    // Providers
    const mySqlProvider = new MysqlDatabaseProvider(mysql, promisify, config.mysql);

    const apiRouter = getApiRouter(express.Router(), mySqlProvider, config);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(config.publicDir));
    app.use("/api", apiRouter);

    app.get("*", (request, response) => response.sendFile(config.publicDir + "/index.html"));

    app.use("*", (request, response) => response.status(404).end("Not Found page"));

    server.listen(config.port, "0.0.0.0", () => console.log("Running on: http://localhost:" + config.port));
  } catch (error) {
    console.error("ServerError: ", error);
  }
})();
