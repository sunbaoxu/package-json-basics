// const fs = require('fs')

// const content = '一些内容'

// fs.appendFile('./writeFile.js', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('文件写入成功。')
// })




const fs = require('fs')
const path = require('path')

const folderPath = './'

let arr = fs.readdirSync(folderPath);

console.log(arr)




