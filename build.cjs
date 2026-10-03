const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
const files = ['index.html','app.js','style.css','case.css','robots.txt','sitemap.xml','forlex/index.html','forlex/case.js','forlex/case.css','purple/index.html','purple/case.js','purple/case.css','portal/index.html','portal/case.js','portal/case.css','sobre/index.html','moodboard/index.html'];
for (const file of files) {
 const target = path.join(output, file);
 fs.mkdirSync(path.dirname(target), { recursive: true });
 fs.copyFileSync(path.join(__dirname, file), target);
}
console.log(`Built ${files.length} public files in dist/`);
