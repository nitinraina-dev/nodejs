const fs = require('fs');
const path = require('path');

// Get the directory name from command line arguments
const folderName = process.argv[2];

if (!folderName) {
  console.log('❌ Please provide a folder name');
  process.exit(1);
}

// Create full path
const projectPath = path.join(__dirname, folderName);
console.log(path.parse(projectPath))

// Create the folder
if (!fs.existsSync(projectPath)) {
  fs.mkdirSync(projectPath);
  console.log(`📁 Folder '${folderName}' created`);
} else {
  console.log(`⚠️ Folder '${folderName}' already exists`);
}





// File contents
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${folderName}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello from ${folderName}</h1>
  <script src="script.js"></script>
</body>
</html>
`;

const cssContent = `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
  padding: 50px;
}
`;

const jsContent = `console.log("Hello from ${folderName} - script.js loaded!");
`;

// Write the files
fs.writeFileSync(path.join(projectPath, 'index.html'), htmlContent);
fs.writeFileSync(path.join(projectPath, 'style.css'), cssContent);
fs.writeFileSync(path.join(projectPath, 'script.js'), jsContent);

console.log(`✅ index.html, style.css, and script.js created inside '${folderName}'`);
