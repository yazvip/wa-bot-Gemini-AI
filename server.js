const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const { initializeWhatsAppClient } = require('./index');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  if (fs.existsSync('.env')) {
    res.sendFile(__dirname + '/index.html');
  } else {
    res.sendFile(__dirname + '/install.html');
  }
});

app.post('/install', (req, res) => {
  const { gemini_api_key, greeting_image_url, payment_image_url } = req.body;
  const envContent = `GEMINI_API_KEY=${gemini_api_key}\nGREETING_IMAGE_URL=${greeting_image_url}\nPAYMENT_IMAGE_URL=${payment_image_url}\n`;

  fs.writeFile('.env', envContent, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving configuration.');
    }
    res.send('Configuration saved. Please restart the server.');
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

if (fs.existsSync('.env')) {
  initializeWhatsAppClient(io);
}

server.listen(3000, () => {
  console.log('listening on *:3000');
});
