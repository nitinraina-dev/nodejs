The `path` module in Node.js is a **core module** that provides utilities for **working with file and directory paths**. It handles path transformations in a way that's consistent across operating systems like Windows, macOS, and Linux.

---

## 🔹 Why use the `path` module?

Because paths differ between OSes:

* Windows: `folder\file.txt`
* POSIX (Linux/macOS): `folder/file.txt`

`path` makes your code **portable and safe** across platforms.

---

## 🔹 Importing the module

```js
const path = require('path');
```

---

## 🔹 Most Common `path` Methods (with Examples)

---

### 1. `path.join([...paths])`

Joins all given path segments using the appropriate separator (`/` or `\`) and normalizes the result.

```js
const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath); // 'folder/subfolder/file.txt' or 'folder\subfolder\file.txt'
```

---

### 2. `path.resolve([...paths])`

Resolves a sequence of paths into an **absolute path**.

```js
const absolute = path.resolve('folder', 'file.txt');
console.log(absolute); // e.g., '/home/user/folder/file.txt' (Linux)
```

If you use `__dirname` or `__filename`, it gives a path relative to your current file:

```js
console.log(path.resolve(__dirname, 'file.txt'));
// Absolute path to file.txt in the same directory
```

---

### 3. `path.basename(path, [ext])`

Returns the **file name** from a path.

```js
const name = path.basename('/user/files/test.txt');
console.log(name); // 'test.txt'

const noExt = path.basename('/user/files/test.txt', '.txt');
console.log(noExt); // 'test'
```

---

### 4. `path.dirname(path)`

Returns the **directory** of the path.

```js
const dir = path.dirname('/user/files/test.txt');
console.log(dir); // '/user/files'
```

---

### 5. `path.extname(path)`

Returns the **file extension**.

```js
const ext = path.extname('notes.md');
console.log(ext); // '.md'
```

---

### 6. `path.parse(path)`

Returns an **object** with root, dir, base, ext, and name.

```js
const parsed = path.parse('/home/user/test.txt');
console.log(parsed);
/*
{
  root: '/',
  dir: '/home/user',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
*/
```

---

### 7. `path.format(obj)`

The reverse of `path.parse()`. Creates a path string from an object.

```js
const obj = {
  dir: '/home/user',
  name: 'test',
  ext: '.txt'
};
console.log(path.format(obj)); // '/home/user/test.txt'
```

---

### 8. `path.normalize(path)`

Fixes slashes and removes `..`/`.` segments.

```js
const p = path.normalize('folder//subfolder/../file.txt');
console.log(p); // 'folder/file.txt'
```

---

### 9. `path.isAbsolute(path)`

Returns `true` if a path is absolute.

```js
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('foo/bar');  // false
```

---

## 🔹 Special Variables

* `__dirname` → Absolute path of current directory
* `__filename` → Absolute path of current file

```js
console.log(__dirname);  // /Users/user/project
console.log(__filename); // /Users/user/project/app.js
```

---

## 🔹 Example: Creating a folder with subfiles

```js
const fs = require('fs');
const path = require('path');

const folderName = 'myProject';

const folderPath = path.join(__dirname, folderName);
const htmlPath = path.join(folderPath, 'index.html');
const cssPath = path.join(folderPath, 'style.css');
const jsPath = path.join(folderPath, 'script.js');

fs.mkdirSync(folderPath);
fs.writeFileSync(htmlPath, '<!DOCTYPE html>');
fs.writeFileSync(cssPath, 'body {}');
fs.writeFileSync(jsPath, 'console.log("hello")');
```

---

## 🔹 Summary

| Method         | Purpose                    |
| -------------- | -------------------------- |
| `join()`       | Join path segments         |
| `resolve()`    | Create absolute path       |
| `basename()`   | Get file name              |
| `dirname()`    | Get directory path         |
| `extname()`    | Get file extension         |
| `parse()`      | Get path parts             |
| `format()`     | Convert parts to full path |
| `normalize()`  | Clean up path              |
| `isAbsolute()` | Check if path is absolute  |

---

