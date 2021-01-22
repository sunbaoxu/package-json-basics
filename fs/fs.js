const fs = require('fs')

fs.open('./a.js', 'a', (err, fd) => {
  console.log(err,fd,'fd 是文件描述符')
})



fs.stat('./a.js', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats,'可以访问 `stats` 中的文件属性')
})