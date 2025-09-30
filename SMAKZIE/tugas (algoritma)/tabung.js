// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let r, t, volume, luas;
r = parseFloat(prompt('Jari-jari (cm) : '));
t = parseFloat(prompt('Tinggi (cm)    : '));

volume = Math.PI * r * r * t;
luas = 2 * Math.PI * r * (r + t);

console.log(`volume         : ${volume.toFixed(2)} cm³`);
console.log(`luas Permukaan : ${luas.toFixed(2)} cm²`);