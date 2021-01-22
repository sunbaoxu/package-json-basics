const path = require('path')
const notes = '/Users/xxx/Works/node/fs/a.js'



let dirname = path.dirname(notes) 
let extname = path.extname(notes)
let basename = path.basename(notes,extname)

console.log(basename)
