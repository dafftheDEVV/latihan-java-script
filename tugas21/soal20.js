// Soal 20
// Hari Jumat, 8 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require('prompt-sync')({ sigint: true });

let huruf = prompt("Masukkan satu huruf (A-Z): ");

huruf = huruf.toLowerCase();

if (huruf.length === 1 && huruf >= 'a' && huruf <= 'z') {
  if ('aeiou'.includes(huruf)) {
    console.log(`${huruf} adalah huruf vokal`);
  } else {
    console.log(`${huruf} adalah huruf konsonan`);
  }
} else {
  console.log(`"${huruf}" bukan huruf alfabet yang valid`);
}
