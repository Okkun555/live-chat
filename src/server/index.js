const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
