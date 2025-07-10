const os = require('os');
const fs = require('fs');
const path = require('path');

// Helper: Convert bytes to MB
const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

// Get system information
const systemInfo = {
  Platform: os.platform(),
  OS_Type: os.type(),
  Architecture: os.arch(),
  Hostname: os.hostname(),
  Total_RAM_MB: toMB(os.totalmem()),
  Free_RAM_MB: toMB(os.freemem()),
  Uptime_Seconds: os.uptime(),
  CPU_Cores: os.cpus().length,
  User: os.userInfo().username,
  Home_Dir: os.homedir()
};

// Format the output
let output = '\n===== SYSTEM INFO =====\n';
for (const key in systemInfo) {
  output += `${key}: ${systemInfo[key]}\n`;
}

// Print to console
console.log(output);

// Log to file
const logPath = path.join(__dirname, 'system-log.txt');
fs.appendFileSync(logPath, output);
console.log(`✅ System info logged to ${logPath}`);
