const prompt = require("prompt-sync")({ sigint: true });

let x, y, z

x = parseInt(prompt(' x : '))
z = parseInt(prompt(' z   : '))
y = parseInt(prompt(' y   : '))

console.log (x + z + y )
console.log ((x * y) - (z + x))