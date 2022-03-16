const fs = require('fs');
// const readStream = fs.createReadStream('./exmaple.txt', 'utf8')
const writeStream = fs.createReadStream('exmaple.txt')
const writeStream2 = fs.createWriteStream('exampleWrite2.txt')
writeStream.pipe(writeStream2);

//piping is actually better.

