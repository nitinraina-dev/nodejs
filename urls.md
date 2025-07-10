Great! Let’s walk through how to:

1. ✅ Create a basic **Node.js server** (using the built-in `http` module)
2. ✅ Understand **URLs** and **query parameters**
3. ✅ Use `response.writeHead()` to send headers (like content type and status)

---

## 🧠 Step-by-step Concept Overview

### 🟢 1. Create a Node.js Server

Node has a built-in module called `http` to create servers.

```js
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.end('Hello from Node server!');
});

// Start listening
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

* `req`: Incoming request (from browser)
* `res`: Server’s response to send back

---

### 🟢 2. Understanding URLs and Query Parameters

When you visit:

```
http://localhost:3000/search?term=node&limit=5
```

* The full URL is: `/search?term=node&limit=5`
* `?term=node&limit=5` are **query parameters**
* This helps send dynamic data through the URL

We can access these using the built-in `url` module:

```js
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const pathname = parsedURL.pathname;      // e.g., "/search"
  const query = parsedURL.query;            // e.g., { term: 'node', limit: '5' }

  if (pathname === '/search') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`You searched for: ${query.term}, limit: ${query.limit}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});
```

---

### 🟢 3. `res.writeHead(statusCode, headers)`

* Sets HTTP status and headers
* Example: `res.writeHead(200, { 'Content-Type': 'text/html' })`

#### Common status codes:

* `200`: OK
* `404`: Not Found
* `500`: Server Error

---

## ✅ Full Example with URL and Query Parsing

```js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const pathname = parsedURL.pathname;
  const query = parsedURL.query;

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Home Page</h1>');
  } else if (pathname === '/search') {
    const term = query.term || 'nothing';
    const limit = query.limit || '10';

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: `Searched for ${term}`, limit }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
```

---

### 🔍 Try Visiting in Browser:

* [http://localhost:3000/](http://localhost:3000/) → Home
* [http://localhost:3000/search?term=js\&limit=3](http://localhost:3000/search?term=js&limit=3) → Search with query

---
