const http = require('http')

const port = 3000;
const addr = require('address')
const ip   = addr.ip();


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end('这是输出的内容------1111')
})

server.listen(port, (e) => {
  console.log(`服务器运行在 http://${ip}:${port}/`)
})



const os = require('os');
let aaa = os.networkInterfaces()
console.log(aaa,'ox')



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