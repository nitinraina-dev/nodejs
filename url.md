The `url` module in **Node.js** is used to parse and manipulate URLs. It provides utilities for URL resolution and parsing using both the **legacy API** (`require('url')`) and the modern **WHATWG URL API** (introduced in Node.js v7).

---

### ✅ 1. Importing the Module

```js
const url = require('url');
```

---

### ✅ 2. Legacy API (Not Recommended for New Code)

```js
const myURL = url.parse('https://example.com:8080/path/name?query=string#hash');

console.log(myURL);
```

#### Output:

```js
{
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com:8080',
  port: '8080',
  hostname: 'example.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/name',
  path: '/path/name?query=string',
  href: 'https://example.com:8080/path/name?query=string#hash'
}
```

> 🔴 **Note:** `url.parse()` is considered legacy. Use the WHATWG URL API instead.

---

### ✅ 3. WHATWG URL API (Recommended)

```js
const { URL } = require('url');

const myURL = new URL('https://example.com:8080/path/name?query=string#hash');

console.log(myURL);
```

#### Output:

```js
URL {
  href: 'https://example.com:8080/path/name?query=string#hash',
  origin: 'https://example.com:8080',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'example.com:8080',
  hostname: 'example.com',
  port: '8080',
  pathname: '/path/name',
  search: '?query=string',
  searchParams: URLSearchParams { 'query' => 'string' },
  hash: '#hash'
}
```

---

### ✅ 4. Accessing Query Parameters

```js
console.log(myURL.searchParams.get('query')); // "string"

myURL.searchParams.append('newParam', '123');
console.log(myURL.href); // updated URL with new query param
```

---

### ✅ 5. Constructing URLs

```js
const newURL = new URL('/about', 'https://example.com');
console.log(newURL.href); // https://example.com/about
```

---

### ✅ Summary: Key Properties

| Property       | Description                          |
| -------------- | ------------------------------------ |
| `href`         | Full URL                             |
| `protocol`     | e.g. `https:`                        |
| `host`         | `hostname:port`                      |
| `pathname`     | Path after domain                    |
| `search`       | Full query string                    |
| `searchParams` | Object to get/set individual queries |
| `hash`         | The fragment part (e.g. `#top`)      |

---
