// Soal 14
// Hari Rabu, 6 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require('prompt-sync')({sigint: true}); 

const angka = Math.floor(Math.random() * 200) + 1;

console.log("Angka yang dihasilkan:", angka);

if (angka > 100) {
  console.log("Nilai kamu sempurna!");
} 