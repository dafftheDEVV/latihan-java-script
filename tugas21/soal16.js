// Soal 16
// Hari Rabu, 6 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require('prompt-sync')({sigint: true}); 


let juara;

while (true) {
    juara = parseFloat(prompt("juara anda 1-3: "));
    if (juara == 1) {
      console.log("Selamat anda juara utama");
      break;
    } else if (juara == 2) {
      console.log("Selamat anda runner up");
      break;
    } else if (juara == 3) {
      console.log("Selamat anda juara ketiga");
      break;
    } else {
      console.log("Input tidak valid! Harus antara 1 dan 3.");
    }
}

console.log(`Juara: ${juara}`);




