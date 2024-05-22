const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'front-end', 'w-shipping-bootstarp4')));

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'front-end', 'w-shipping-bootstarp4', 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

const server = http.createServer(app);

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
