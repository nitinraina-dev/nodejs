The `os` module in Node.js provides operating system-related utility methods and properties. It allows you to interact with the underlying operating system and retrieve system information like CPU architecture, memory, network interfaces, and more.

You don't need to install it — it's a **core module** in Node.js.

---

### ✅ How to use it:

```js
const os = require('os');
```

---

### 📘 Commonly Used Methods

| Method                   | Description                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| `os.type()`              | Returns the operating system name. (e.g., `'Linux'`, `'Darwin'`, `'Windows_NT'`) |
| `os.platform()`          | Returns the platform. (e.g., `'win32'`, `'darwin'`, `'linux'`)                   |
| `os.arch()`              | Returns the CPU architecture. (e.g., `'x64'`, `'arm'`)                           |
| `os.cpus()`              | Returns an array of objects containing info about each logical CPU core.         |
| `os.totalmem()`          | Returns the total system memory in bytes.                                        |
| `os.freemem()`           | Returns the free system memory in bytes.                                         |
| `os.uptime()`            | Returns the system uptime in seconds.                                            |
| `os.hostname()`          | Returns the hostname of the system.                                              |
| `os.userInfo()`          | Returns information about the current user.                                      |
| `os.networkInterfaces()` | Returns network interfaces with IP address details.                              |
| `os.release()`           | Returns the operating system release.                                            |

---

### 💡 Example:

```js
const os = require('os');

console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory (MB):', os.totalmem() / (1024 * 1024));
console.log('Free Memory (MB):', os.freemem() / (1024 * 1024));
console.log('Uptime (seconds):', os.uptime());
console.log('User Info:', os.userInfo());
```

---

### 🧠 Use Cases

* Monitoring tools or dashboards
* Building system utilities
* Logging system info for debugging
* Adjusting behavior depending on the platform (e.g., Linux vs Windows)

---

