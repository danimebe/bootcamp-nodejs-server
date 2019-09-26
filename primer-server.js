const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hola mundo HTTP');
});

server.listen(3000);
