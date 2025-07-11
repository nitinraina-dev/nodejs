File operations in **Node.js** are primarily handled using the **`fs` (File System)** module. This built-in module provides both **synchronous** and **asynchronous** methods to perform file operations like reading, writing, deleting, renaming, copying, and watching files or directories.

---

## 🔧 Importing the `fs` Module

```js
const fs = require('fs');
```

You can also use the **promise-based version**:

```js
const fs = require('fs/promises');
```

---

## 1. 📖 Reading Files

### ✅ Async (Non-blocking)

```js
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### ❌ Sync (Blocking)

```js
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

### ✅ Using `fs/promises`

```js
const fs = require('fs/promises');

async function readFile() {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
}
readFile();
```

---

## 2. ✍️ Writing to Files

### Overwrites content

```js
fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File written!');
});
```

### Appends to existing content

```js
fs.appendFile('file.txt', '\nNew line', (err) => {
    if (err) throw err;
    console.log('Content appended!');
});
```

---

## 3. 🗑️ Deleting Files

```js
fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted');
});
```

---

## 4. 🧾 Renaming or Moving Files

```js
fs.rename('old.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log('File renamed/moved');
});
```

---

## 5. 📁 Directory Operations

### Creating a Directory

```js
fs.mkdir('myfolder', (err) => {
    if (err) throw err;
    console.log('Directory created');
});
```

### Deleting a Directory

```js
fs.rmdir('myfolder', (err) => {
    if (err) throw err;
    console.log('Directory removed');
});
```

### Reading Contents of a Directory

```js
fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files); // Array of filenames
});
```

---

## 6. 🕵️ File Stats (Check existence, size, modified time, etc.)

```js
fs.stat('file.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats.isFile()); // true
    console.log(stats.size);     // bytes
});
```

---

## 7. 🧠 Streams (Advanced — for large files)

### Reading a file using stream

```js
const readStream = fs.createReadStream('bigfile.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});
```

### Writing a file using stream

```js
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello\n');
writeStream.write('World\n');
writeStream.end(); // Close stream
```

---

## 8. 📡 Watch File for Changes

```js
fs.watch('file.txt', (eventType, filename) => {
    console.log(`File changed: ${filename} - ${eventType}`);
});
```

---

## 9. ⚠️ Checking if File Exists

> `fs.existsSync()` is discouraged in favor of `fs.access()`

### ✅ Recommended:

```js
fs.access('file.txt', fs.constants.F_OK, (err) => {
    console.log(err ? 'File does not exist' : 'File exists');
});
```

---

## 10. 🔐 Permissions and Constants

Use constants like:

* `fs.constants.F_OK` — File exists
* `fs.constants.R_OK` — Readable
* `fs.constants.W_OK` — Writable

```js
fs.access('file.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) console.error('No access!');
    else console.log('Readable and writable');
});
```

---

## Summary Table

| Operation     | Async Function    | Sync Function         | Promise-based (`fs/promises`) |
| ------------- | ----------------- | --------------------- | ----------------------------- |
| Read          | `fs.readFile()`   | `fs.readFileSync()`   | `fs.readFile()`               |
| Write         | `fs.writeFile()`  | `fs.writeFileSync()`  | `fs.writeFile()`              |
| Append        | `fs.appendFile()` | `fs.appendFileSync()` | `fs.appendFile()`             |
| Delete        | `fs.unlink()`     | `fs.unlinkSync()`     | `fs.unlink()`                 |
| Rename        | `fs.rename()`     | `fs.renameSync()`     | `fs.rename()`                 |
| Directory Ops | `fs.mkdir()`      | `fs.mkdirSync()`      | `fs.mkdir()`                  |
| Stats         | `fs.stat()`       | `fs.statSync()`       | `fs.stat()`                   |
| Watch         | `fs.watch()`      | ❌                     | ❌                             |

---
