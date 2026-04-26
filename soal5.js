// BALOK

const prompt = require("prompt-sync")({ sigint: true });

let panjang, lebar, tinggi, konstanta, volume;
konstanta = 2;
panjang = parseInt(prompt('panjang : '));
tinggi = parseInt(prompt('tinggi : '));
lebar = parseInt(prompt('lebar : '));


volume = panjang * lebar * tinggi;
luasPermukaan = (konstanta * (panjang * lebar + panjang * tinggi + lebar * tinggi)); 

console.log(`luasPermukaan : ${luasPermukaan.toFixed(2)} cm²`);
console.log(`Volume   : ${volume.toFixed(2)} cm³`);