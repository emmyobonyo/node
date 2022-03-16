const fs = require('fs');
fs.readdir('tutorial', (err,files) => {
  if (err){
    console.log(err)
  } else {
    console.log(files)
  }
})