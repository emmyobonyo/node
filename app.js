const fs = require('fs');
const readStream = fs.createReadStream('./exmaple.txt', 'utf8')
const writeStream = fs.createWriteStream('exampleWrite.txt')
readStream.on('data', (chunk)=>{
  writeStream.write(chunk)
})