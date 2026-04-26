// trapesium

const prompt = require("prompt-sync")({ sigint: true });

let isi_atas = parseInt(prompt('Sisi atas : '));
let tinggi_trapesium = parseInt(prompt('Tinggi trapesium : '));
let sisi_bawahs = parseInt(prompt('Sisi bawah : '));
let sisi_tidak_sejajar1 = parseInt(prompt('Sisi tidak sejajar 1 : '));
let sisi_tidak_sejajar2 = parseInt(prompt('Sisi tidak sejajar 2 : '));

let luas = 1/2 * (sisi_atas + sisi_bawah) * tinggi_trapesium;
let keliling = sisi_atas + sisi_bawah + sisi_tidak_sejajar1 + sisi_tidak_sejajar2;

console.log(`Luas     : ${luas.toFixed(2)} cm²`);
console.log(`Keliling : ${keliling.toFixed(2)} cm`);