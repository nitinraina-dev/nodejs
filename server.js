// server.js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true to get query as object
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;


  if (pathname === '/') {
    res.end('<h1>Welcome to Home Page</h1>');
  } else if (pathname === '/about') {
    res.end('<h1>About Us</h1>');
  } else if (pathname === '/contact') {
    res.end('<h1>Contact Us at contact@example.com</h1>');
  } else if (pathname === '/greet') {
    const name = query.name || 'Guest';
    res.end(`<h1>Hello, ${name}!</h1>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

