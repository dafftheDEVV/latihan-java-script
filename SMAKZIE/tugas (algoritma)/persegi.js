// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let sisi, luas, keliling;
sisi = parseFloat(prompt('Sisi : '));
luas = sisi * sisi;
keliling = 4 * sisi;

console.log(`Luas      : ${luas} cm²`);
console.log(`Keliling  : ${keliling} cm`);