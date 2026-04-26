// limas segi empat

const prompt = require("prompt-sync")({ sigint: true });

let sisi_alas, tinggi_segitiga_sisi_tegak, tinggi_limas, luas, volume;
sisi_alas = parseInt(prompt('Sisi alas : '));
tinggi_segitiga_sisi_tegak = parseInt(prompt('Tinggi segitiga sisi tegak : '));
tinggi_limas = parseInt(prompt('Tinggi limas : '));

luas = (sisi_alas * sisi_alas) + 4 * (1/2 * sisi_alas * tinggi_segitiga_sisi_tegak);   
volume = (1/3) * sisi_alas * sisi_alas * tinggi_limas;

console.log(`Luas     : ${luas.toFixed(2)} cm²`);
console.log(`Volume   : ${volume.toFixed(2)} cm³`);