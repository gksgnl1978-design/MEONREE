const fs = require('fs');

let js = fs.readFileSync('beautified.js', 'utf8');

const startIndex = js.indexOf('function qA()');
const endIndex = js.indexOf('Zx.createRoot(');

let appCode = js.substring(startIndex, endIndex);

fs.writeFileSync('extracted.js', appCode);
console.log('Extracted appcode');
