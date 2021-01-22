const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, (e) => {
  console.log(`服务器运行在 http://hostname:${port}/`)
})



// const axios = require('axios')

// axios
//   .post('http://nodejs.cn/todos', {
//     todo: '做点事情'
//   })
//   .then(res => {
//     console.log(`状态码: ${res.statusCode}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })