const EventEmitter = require('events')
const eventEmitter = new EventEmitter()



eventEmitter.on('start', (e) => {
  console.log(e,'开始')
})



eventEmitter.emit('start',34)