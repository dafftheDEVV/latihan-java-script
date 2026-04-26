// Soal 18
// Hari Selasa, 5 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require("prompt-sync")({ sigint: true });

let angka1;
angka1 = parseInt(prompt('masukan angka : '));

if (angka1 % 7 === 0) {
console.log("Anda sial");
} else {
 console.log("Anda beruntung");
}