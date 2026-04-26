// Soal 21
// Hari Rabu, 6 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2


const prompt = require('prompt-sync')({sigint: true});

let nama = prompt("Masukkan nama siswa: ");
let nilai;
let grade = "";

while (true) {
  nilai = parseFloat(prompt("Masukkan nilai (0-100): "));
  if (nilai >= 0 && nilai <= 100) {
    if (nilai >= 90) {
      grade = "A";
    } else if (nilai >= 80) {
      grade = "B";
    } else if (nilai >= 70) {
      grade = "C";
    } else if (nilai >= 60) {
      grade = "D";
    } else {
      grade = "E";
    }
    break; 
  } else {
    console.log("Nilai tidak valid! Harus antara 0 dan 100.");
  }
}

console.log(`Siswa: ${nama}`);
console.log(`Nilai: ${nilai}`);
console.log(`Grade: ${grade}`);
