const fs = require('fs');

let js = fs.readFileSync('beautified.js', 'utf8');

// Replace x.jsx and x.jsxs calls to React.createElement
js = js.replace(/x\.jsx\(/g, 'React.createElement(');
js = js.replace(/x\.jsxs\(/g, 'React.createElement(');
js = js.replace(/Wt\.(\w+)/g, 'motion.$1');
js = js.replace(/Qe\(/g, 'clsx(');

// Add custom functions
// const Q = React
fs.writeFileSync('src/App.jsx', js);
console.log('Done');
