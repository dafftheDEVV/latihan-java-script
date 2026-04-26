// Soal 8
// Hari Jumat, 8 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require('prompt-sync')({sigint: true});

function sapa(nama) {
    console.log(`Apakabar ${nama}? Wish you luck!`);
}

let nama = prompt("Masukkan nama: ");
sapa(nama);