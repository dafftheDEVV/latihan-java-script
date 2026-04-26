// Soal 13
// Hari Kamis, 7 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2


const prompt = require("prompt-sync")({ sigint: true });

let nasigoreng = 13000;
let pajak = 0.1;
let fee = 0.05;

let hargabayar = nasigoreng + (nasigoreng * pajak) + (nasigoreng * fee);

console.log(`Harga Nasi Goreng: Rp ${nasigoreng}`);
console.log(`Pajak (10%): Rp ${(nasigoreng * pajak).toFixed(2)}`);
console.log(`Fee (5%): Rp ${(nasigoreng * fee).toFixed(2)}`);
console.log(`Total Harga yang harus dibayar: Rp ${hargabayar.toFixed(2)}`);