const http = require('http');
const url = require('url');

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Keyboard' },
  { id: 3, name: 'Mouse' },
  { id: 4, name: 'Monitor' },
  { id: 5, name: 'Phone' }
];

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const pathname = parsedURL.pathname;
  const query = parsedURL.query;

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Welcome to Product Search</h1>
      <p>Try <code>/search?name=mouse</code></p>
    `);
  }

  else if (pathname === '/search') {
    const nameQuery = (query.name || '').toLowerCase();

    const results = products.filter(product =>
      product.name.toLowerCase().includes(nameQuery)
    );

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      query: nameQuery,
      results
    }));
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
