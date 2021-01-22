
console.log('同步11------')


setImmediate(() => {
  //运行一些东西
  console.log('setImmediate执行--------')
})

setTimeout(()=>{
  console.log('setTimeout执行-----------')
},0)

process.nextTick(() => {
  //做些事情
  console.log('process执行 ---------- ')
})


console.log('同步2--------')




