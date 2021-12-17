'use strict';

const http = require('http');
const PORT = process.env.PORT || 5000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
  res.end('Hello, now!');
}).listen(PORT);

console.log(`Server running at ${PORT}`);
