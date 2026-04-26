// Soal 19
// Hari Jumat, 8 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require('prompt-sync')({sigint: true});

let x,y,z,terbesar,terkecil;
x = parseInt(prompt("Masukkan nilai x: "));
y = parseInt(prompt("Masukkan nilai y: "));
z = parseInt(prompt("Masukkan nilai z: "));

terbesar = Math.max(x, y, z);
terkecil = Math.min(x, y, z);

console.log(`Nilai terbesar adalah: ${terbesar}`);
console.log(`Nilai ditengah antara terbesar dan terkecil adalah: ${x + y + z - terbesar - terkecil}`);
console.log(`Nilai terkecil adalah: ${terkecil}`);