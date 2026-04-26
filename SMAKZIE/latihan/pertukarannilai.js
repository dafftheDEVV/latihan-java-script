const prompt = require("prompt-sync")({sigint: true})

let x = Number(prompt('input nilai pertama :'));
let y = Number(prompt('input nilai kedua :'));

//cara ke 1 dengan menambah nilai variabel baru
// let z = y;
// y = x;
// x = z;
// console.log(`${x}, ${y}`);

//cara ke 2 tanpa menambah variabel baru
// x = y + y;
// y = x - y;
// x = y - x;
// console.log(`${x}, ${y}`);

//cara ke 3 dengan destrukrurisasi
x = x ^ y;
y = x ^ y; //y = (x ^ y) ^ y -> y = x
x = x ^ y;
console.log(`${x}, ${y}`);