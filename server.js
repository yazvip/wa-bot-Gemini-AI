const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const { initializeWhatsAppClient } = require('./index');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const db = new sqlite3.Database('database.db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/admin', express.static('admin'));

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
    db.run('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)', ['gemini_api_key', gemini_api_key], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error saving configuration.');
      }
      res.send('Configuration saved. Please restart the server.');
    });
  });
});

// Admin panel API routes
app.get('/api/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY timestamp DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/settings', (req, res) => {
  db.get('SELECT value FROM settings WHERE key = ?', ['gemini_api_key'], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ gemini_api_key: row ? row.value : '' });
  });
});

app.post('/api/settings', (req, res) => {
  const { gemini_api_key } = req.body;
  db.run('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)', ['gemini_api_key', gemini_api_key], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Settings saved' });
  });
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

if (fs.existsSync('.env')) {
  initializeWhatsAppClient(io, db);
}

server.listen(3000, () => {
  console.log('listening on *:3000');
});
