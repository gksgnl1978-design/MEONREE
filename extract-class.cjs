const fs = require('fs');
const js = fs.readFileSync('index.js', 'utf8');

const classMatches = js.match(/className:\s*["'][^"']+["']/g);
if (classMatches) {
  const uniqueClassNames = [...new Set(classMatches.map(m => m.split(/["']/)[1]))];
  console.log("Found classNames:");
  // group them sensibly
  uniqueClassNames.slice(0, 50).forEach(c => console.log(c));
}
