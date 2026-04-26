// persegi

const prompt = require("prompt-sync")({ sigint: true });

let luas, keliling, sisi, konstanta;
konstanta = 4;
sisi = parseInt(prompt('sisi : '));


luas = sisi * sisi;
keliling = konstanta * sisi;

console.log(`Luas     : ${luas.toFixed(2)} cm²`);
console.log(`Keliling : ${keliling.toFixed(2)} cm`);