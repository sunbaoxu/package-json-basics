const fs = require('fs')

fs.readFile('./fs.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})