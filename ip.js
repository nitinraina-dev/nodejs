const http = require('http');

const server = http.createServer((req, res) => {
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Detected IP address: ${ip}`);
});

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
