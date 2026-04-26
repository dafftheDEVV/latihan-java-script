// Soal 11
// Hari Kamis, 7 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require('prompt-sync')({sigint: true}); 

const Siswa_X_RPL_1 = Math.floor(Math.random() * 42) + 1;
const Siswa_X_RPL_2 = Math.floor(Math.random() * 42) + 1;
const Siswa_X_TKJ_1 = Math.floor(Math.random() * 42) + 1;
const Siswa_X_TKJ_2 = Math.floor(Math.random() * 42) + 1;

let totalSiswa = Siswa_X_RPL_1 + Siswa_X_RPL_2 + Siswa_X_TKJ_1 + Siswa_X_TKJ_2;

console.log("Siswa X RPL 1:", Siswa_X_RPL_1);
console.log("Siswa X RPL 2:", Siswa_X_RPL_2);
console.log("Siswa X TKJ 1:", Siswa_X_TKJ_1);
console.log("Siswa X TKJ 2:", Siswa_X_TKJ_2);
console.log("Total Siswa:", totalSiswa);