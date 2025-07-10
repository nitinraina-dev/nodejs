The `fs` module in Node.js stands for **File System**. It allows you to work with files and directories — like creating, reading, writing, updating, deleting, and listing them — all directly from your Node.js code.

---

## 📦 How to Use

```js
const fs = require('fs');
```

There are **two types of methods** in `fs`:

* **Synchronous** (blocking): `fs.readFileSync()`, `fs.writeFileSync()`
* **Asynchronous** (non-blocking): `fs.readFile()`, `fs.writeFile()` — these use callbacks or Promises

---

## 🔧 Common `fs` Methods

| Method               | Purpose                         |
| -------------------- | ------------------------------- |
| `fs.writeFile()`     | Write to a file (async)         |
| `fs.writeFileSync()` | Write to a file (sync)          |
| `fs.readFile()`      | Read a file (async)             |
| `fs.readFileSync()`  | Read a file (sync)              |
| `fs.appendFile()`    | Add content to an existing file |
| `fs.existsSync()`    | Check if a file/folder exists   |
| `fs.mkdirSync()`     | Create a directory              |
| `fs.readdirSync()`   | Read contents of a directory    |
| `fs.unlinkSync()`    | Delete a file                   |
| `fs.rmdirSync()`     | Remove a directory              |
| `fs.renameSync()`    | Rename or move a file           |

---

## 🔍 Examples

### 1. **Create or Overwrite a File**

```js
fs.writeFileSync('hello.txt', 'Hello World!');
```

### 2. **Read a File**

```js
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data); // Hello World!
```

### 3. **Append to a File**

```js
fs.appendFileSync('hello.txt', '\nThis is a new line.');
```

### 4. **Check if File or Directory Exists**

```js
if (fs.existsSync('hello.txt')) {
  console.log('File exists!');
}
```

### 5. **Create a Folder**

```js
fs.mkdirSync('newFolder');
```

### 6. **List All Files in a Directory**

```js
const files = fs.readdirSync('.');
console.log(files); // ['hello.txt', 'newFolder', ...]
```

---

## ⚠️ Synchronous vs Asynchronous

### Sync (Blocking)

```js
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data); // Waits for file to load
```

### Async (Non-blocking)

```js
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data); // Loads later, doesn't block
});
```

---

## 📚 Use Cases

* Static file servers (like serving HTML)
* Building CLI tools
* Reading configurations (e.g., JSON files)
* Logging data to files
* File uploads or processing

---



In Node.js, the built-in **`path`** module provides utilities for working with file and directory paths. It's especially useful when dealing with filesystem operations and ensures your paths work correctly across different operating systems (like Windows vs Linux).

---

### 🔧 How to Import It

```js
const path = require('path');
```

---

### 📌 Common Uses of `path` Module

| Method             | Use                                                                              |
| ------------------ | -------------------------------------------------------------------------------- |
| `path.join()`      | Join all given path segments using the platform-specific separator (`/` or `\`). |
| `path.resolve()`   | Resolves a sequence of paths into an absolute path.                              |
| `path.basename()`  | Returns the last portion of a path (i.e., the file name).                        |
| `path.dirname()`   | Returns the directory portion of a path.                                         |
| `path.extname()`   | Returns the file extension.                                                      |
| `path.parse()`     | Returns an object with root, dir, base, ext, and name.                           |
| `path.format()`    | Returns a path string from an object (opposite of `parse()`).                    |
| `path.sep`         | Returns the platform-specific path segment separator.                            |
| `path.normalize()` | Corrects path by resolving `..`, `.` segments.                                   |

---

### 🧪 Examples

#### 1. `path.join()`

```js
const filePath = path.join(__dirname, 'folder', 'file.txt');
console.log(filePath);
// Output (on Linux): /home/user/project/folder/file.txt
```

#### 2. `path.resolve()`

```js
const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath);
// Output: /current/working/dir/folder/file.txt
```

#### 3. `path.basename()`

```js
const base = path.basename('/folder/file.txt');
console.log(base); // Output: file.txt
```

#### 4. `path.extname()`

```js
const ext = path.extname('index.html');
console.log(ext); // Output: .html
```

#### 5. `path.parse()` and `path.format()`

```js
const parsed = path.parse('/home/user/file.js');
console.log(parsed);
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.js',
  ext: '.js',
  name: 'file'
}
*/

const formatted = path.format(parsed);
console.log(formatted); // Output: /home/user/file.js
```

---

### 💡 When to Use `path`

* Building file or folder paths dynamically
* Ensuring cross-platform compatibility for paths
* Extracting parts of a file path (name, extension, etc.)
* Working with `fs` module to read/write files

---


The `os` module in **Node.js** provides a way to interact with the **operating system**. It gives you information like platform, CPU, memory, home directory, etc. Useful when you want your app to adapt to different machines.

---

## ✅ How to Use

```js
const os = require('os');
```

---

## 📌 Most Common `os` Module Methods

| Method                   | Description                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| `os.platform()`          | Returns the operating system platform (`'darwin'`, `'win32'`, `'linux'`, etc.) |
| `os.type()`              | Returns the OS name (`'Linux'`, `'Darwin'`, `'Windows_NT'`)                    |
| `os.arch()`              | Returns the CPU architecture (`'x64'`, `'arm'`, etc.)                          |
| `os.cpus()`              | Returns info about each logical CPU core                                       |
| `os.totalmem()`          | Returns total system memory in bytes                                           |
| `os.freemem()`           | Returns free system memory in bytes                                            |
| `os.uptime()`            | Returns system uptime in seconds                                               |
| `os.userInfo()`          | Returns current user info (UID, username, etc.)                                |
| `os.homedir()`           | Returns the path of the current user’s home directory                          |
| `os.hostname()`          | Returns the computer’s hostname                                                |
| `os.networkInterfaces()` | Returns info about network interfaces (IP address, MAC, etc.)                  |
| `os.endianness()`        | Returns CPU endianness (`'BE'` or `'LE'`)                                      |

---

## 🧪 Example

```js
const os = require('os');

console.log('Platform:', os.platform());         // win32 / linux / darwin
console.log('OS Type:', os.type());             // Windows_NT / Linux / Darwin
console.log('Architecture:', os.arch());        // x64
console.log('CPU Info:', os.cpus().length, 'cores');
console.log('Total RAM:', os.totalmem() / 1024 / 1024, 'MB');
console.log('Free RAM:', os.freemem() / 1024 / 1024, 'MB');
console.log('Uptime:', os.uptime(), 'seconds');
console.log('Home Directory:', os.homedir());
console.log('User Info:', os.userInfo());
```

---

## 🔧 Use Cases

* Show system info in a CLI app
* Check free memory before running a heavy task
* Get the user's home directory to store config files
* Detect platform-specific behavior (e.g., for path separators or OS commands)

---


To create a server in **Node.js**, the most recent and modern way (as of 2025) is to use the **native `http` module** with **ESM (ECMAScript Modules)** syntax or **CommonJS**, depending on your setup. Here's how to do it with the **latest features**, including **ES modules**, **async handlers**, and optionally **`import` syntax**.

---

## ✅ 1. **Using ES Modules (Modern approach)**

### `server.mjs`

```js
import http from 'http';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running using Node.js!\n');
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
```

### To Run:

```bash
node server.mjs
```

> ✅ This is clean, modern, and future-proof. Works well with top-level `await` and modern syntax.

---

## ✅ 2. **Using CommonJS (Still widely used)**

### `server.js`

```js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!');
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
```

### To Run:

```bash
node server.js
```

---

## 🌐 Optional: Serve HTML/CSS/JS Files

If you want to serve `index.html`, `style.css`, and `script.js`, use the `fs` and `path` modules:

### `static-server.mjs`

```js
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  let ext = path.extname(filePath);

  let contentType = 'text/html';
  if (ext === '.css') contentType = 'text/css';
  else if (ext === '.js') contentType = 'text/javascript';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🌍 Server running at http://localhost:${PORT}`);
});
```

> Place your files in a folder named `public` (like `public/index.html`, etc.)

---

## 🚀 Summary

| Approach     | Syntax    | Use When…                                                  |
| ------------ | --------- | ---------------------------------------------------------- |
| ES Modules   | `import`  | You're using modern Node.js (`.mjs` or `"type": "module"`) |
| CommonJS     | `require` | Compatibility with older tools/projects                    |
| `express.js` | Framework | For real projects, REST APIs, routing, middleware, etc.    |



In Node.js, you can send **many types of data** to the client, depending on what the client (usually a browser or API consumer) expects. Here are the **main types** of data you can send from a Node.js server:

---

### ✅ 1. **HTML**

Used to render web pages.

```js
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<h1>Hello World</h1>');
```

---

### ✅ 2. **JSON**

Used for APIs and data exchange.

```js
const data = { message: 'Hello from JSON' };
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
```

---

### ✅ 3. **Plain Text**

```js
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('This is plain text');
```

---

### ✅ 4. **CSS**

To style HTML pages.

```js
res.writeHead(200, { 'Content-Type': 'text/css' });
res.end('body { background-color: lightblue; }');
```

---

### ✅ 5. **JavaScript**

```js
res.writeHead(200, { 'Content-Type': 'application/javascript' });
res.end('console.log("Hello from JS");');
```

---

### ✅ 6. **Images**

Like PNG, JPG, SVG, etc. (read as binary)

```js
const fs = require('fs');
const path = require('path');
const img = fs.readFileSync(path.join(__dirname, 'image.png'));

res.writeHead(200, { 'Content-Type': 'image/png' });
res.end(img);
```

---

### ✅ 7. **PDF or Other Binary Files**

```js
const fs = require('fs');
const path = require('path');
const pdf = fs.readFileSync(path.join(__dirname, 'file.pdf'));

res.writeHead(200, { 'Content-Type': 'application/pdf' });
res.end(pdf);
```

---

### ✅ 8. **Streams (for large files)**

Instead of `fs.readFile`, use `fs.createReadStream()` to stream large files:

```js
const stream = fs.createReadStream('largefile.mp4');
res.writeHead(200, { 'Content-Type': 'video/mp4' });
stream.pipe(res);
```

---

### ✅ 9. **Redirects**

You can send a redirect response.

```js
res.writeHead(302, { 'Location': '/new-page' });
res.end();
```

---

### ✅ 10. **XML** (Less common now, but still used)

```js
const xml = `<note><to>User</to><message>Hello</message></note>`;
res.writeHead(200, { 'Content-Type': 'application/xml' });
res.end(xml);
```

---

### In summary:

| Data Type  | Content-Type             |
| ---------- | ------------------------ |
| HTML       | `text/html`              |
| JSON       | `application/json`       |
| Text       | `text/plain`             |
| CSS        | `text/css`               |
| JavaScript | `application/javascript` |
| PNG        | `image/png`              |
| JPEG       | `image/jpeg`             |
| PDF        | `application/pdf`        |
| XML        | `application/xml`        |
| MP4        | `video/mp4`              |

---



