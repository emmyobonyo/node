const path = require('path');

// console.log(path.join());
// console.log(path.sep)
const filePath = path.join('/tutorial', 'a.txt')
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, 'tutorial', 'a.txt')
console.log(absolute)