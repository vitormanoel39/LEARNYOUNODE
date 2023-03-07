const fs = require('fs')

const file = process.argv[2]
const buf = fs.readFileSync(file, 'utf8')
const str = buf.toString()
const lines = str.split('\n').length - 1

console.log(lines)