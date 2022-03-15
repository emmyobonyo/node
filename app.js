const fs = require('fs'); //file system module
fs.writeFile('example.txt', 'This is an example file', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('File successfully created')
    fs.readFile('example.txt', 'utf8', (err, file)=> {
      if(err){
        console.log(err)
      } else {
        console.log(file)
      }
    })
  }
})

fs.appendFile('example.txt', 'Some data to append', (err)=>{
  if(err){
    console.log(err)
  } else {
    console.log('successfully appended data')
  }
})

fs.unlink('example.txt', (err)=>{
  if(err){
    console.log(err)
  } else {
    console.log('File successfully deleted')
  }
})