// Soal 17
// Hari Kamis, 7 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2

const prompt = require("prompt-sync")({ sigint: true });

let hargabarang = parseFloat(prompt("Masukkan harga barang: "));

if (hargabarang >= 200000) {
    let diskon = 0.075; 
    let totalDiskon = hargabarang * diskon;
    let hargaAkhir = hargabarang - totalDiskon;

    console.log(`Harga awal: Rp ${hargabarang}`);
    console.log(`Diskon (10%): Rp ${totalDiskon.toFixed(2)}`);
    console.log(`Harga setelah diskon: Rp ${hargaAkhir.toFixed(2)}`);
} else {
    console.log("Tidak ada diskon, harga tetap: Rp " + hargabarang.toFixed(2));
}