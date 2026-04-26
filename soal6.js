// tabung

const prompt = require("prompt-sync")({ sigint: true });


let jariJari, tinggi, volume, luasPermukaan, pi;
 pi = 3.14;


jariJari = parseFloat(prompt('Masukkan jari-jari alas tabung (cm): '));
tinggi = parseFloat(prompt('Masukkan tinggi tabung (cm): '));

 
volume = pi * jariJari * jariJari * tinggi;


luasPermukaan = 2 * pi * jariJari * (jariJari + tinggi);


console.log(`Luas Permukaan Tabung : ${luasPermukaan.toFixed(2)} cm²`);
console.log(`Volume Tabung         : ${volume.toFixed(2)} cm³`);

