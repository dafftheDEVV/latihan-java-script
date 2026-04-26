// Soal 6
// Hari Selasa, Tanggal 5, Bulan Agustus, Tahun 2025
// Amzhar Afarka X PPLG 2

const prompt = require("prompt-sync")({ sigint: true })
let nama, nilai 
nama = parseInt(prompt(`Nama : `))
nilai = parseInt(prompt(`Nilai rapot : `))
if (nilai >= 85) {
    console.log(Lulus)
} else if (nilai <= 85) {
    console.log(`Tidak lulus`)
}