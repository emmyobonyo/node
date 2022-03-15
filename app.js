const fs = require('fs'); //file system module
fs.writeFile('example.txt', 'This is an example file', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('File successfully created')
  }
})