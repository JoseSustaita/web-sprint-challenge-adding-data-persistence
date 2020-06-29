const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projects/project-router");
const resourceRouter = require("./resource/resource-router");
const taskRouter = require("./task/task-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use(projectRouter);
server.use(resourceRouter);
server.use(taskRouter);

server.get("/", (req, res) => {
  res.send("DataBase");
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
