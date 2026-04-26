const prompt = require('prompt-sync')({sigint : true});

let x = Number(prompt('input nilai X:'))
let y = Number(prompt('input nilai Y:'))

let z = x
x = y
y = z

console.log(`nilai setelah pertukaran: x = ${x}, y = ${y}`)

// tanpa variabel ketiga
x = x + y
y = x - y
x = x - y

console.log(`nilai setelah pertukaran tanpa variabel ketiga: x = ${x}, y = ${y}`)

// tanpa variabel ketiga (xor)

x = x ^ y
y = x ^ y
x = x ^ y

console.log(`nilai setelah pertukaran tanpa variabel ketiga (xor): x = ${x}, y = ${y}`)

// pertukaran 3 variabel

let temp = x;
x = y;        
y = z;        
z = temp;     

console.log(`nilai setelah pertukaran 3 variable: x = ${x}, y = ${y}, z = ${z}`);
