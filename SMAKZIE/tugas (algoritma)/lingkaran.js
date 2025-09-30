// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let r, luas, keliling;
const phi = 3.14;

r = parseFloat(prompt('Jari-jari : '));
luas = phi * r * r;
keliling = 2 * phi * r;

console.log(`Luas      : ${luas} cm²`);
console.log(`Keliling  : ${keliling} cm`);