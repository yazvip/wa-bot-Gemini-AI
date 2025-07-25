const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { initializeWhatsAppClient } = require('./index');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

initializeWhatsAppClient(io);

server.listen(3000, () => {
  console.log('listening on *:3000');
});
