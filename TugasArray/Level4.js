const prompt = require('prompt-sync')({sigint: true});

// soal 1
console.log("Soal 1");
// array objek siswa
let siswa1 = [
    { nama: 'Andi', nilai: 85 },
    { nama: 'Budi', nilai: 65 },
    { nama: 'Citra', nilai: 70 }
];
// cari data siswa dengan nama 'Budi' dan tampilkan nilainya
let caridata = siswa1.find(s => s.nama === 'Budi'); // fungsi find untuk mencari elemen dalam array yang memenuhi kondisi tertentu
if (caridata) {
    console.log(`Nilai Budi: ${caridata.nilai}`);
} else {
    console.log("Siswa dengan nama 'Budi' tidak ditemukan.");
}

// soal 2
console.log("Soal 2");
// array objek siswa
let siswa2 = [
    { nama: 'Andi', nilai: 85 },
    { nama: 'Budi', nilai: 65 },
    { nama: 'Citra', nilai: 70 }
];
// mengurutkan nilai terbesar ke terkecil
let urutNilai = siswa2.slice().sort((a, b) => b.nilai - a.nilai); // fungsi slice() untuk membuat salinan array agar array asli tidak terubah
// fungsi sort untuk mengurutkan elemen array berdasarkan nilai
console.log("Siswa diurutkan berdasarkan nilai (terbesar ke terkecil):");
urutNilai.forEach(s => console.log(`${s.nama} - ${s.nilai}`));

// soal 3
console.log("Soal 3");

// array barang contoh
let barang = [
    { nama: 'Pensil', harga: 2000 },
    { nama: 'Buku', harga: 15000 },
    { nama: 'Penghapus', harga: 1000 },
    { nama: 'Pulpen', harga: 5000 }
];

// hitung total harga semua barang
let totalHarga = barang.reduce((sum, item) => sum + item.harga, 0); // fungsi reduce untuk menjumlahkan harga semua barang
console.log("Daftar barang:");
barang.forEach(b => console.log(`${b.nama} - Rp${b.harga}`));
console.log(`Total harga semua barang: Rp${totalHarga}`);

// soal 4
console.log("Soal 4");
let nilai = [60, 85, 70, 90, 95, 80];
// cari nilai tertinggi tanpa Math.max menggunakan reduce
let nilaiTertinggi = nilai.reduce((max, cur) => cur > max ? cur : max, nilai[0]);// fungsi reduce untuk mencari nilai tertinggi dalam array
console.log(`Nilai: [${nilai.join(', ')}]`);
console.log(`Nilai tertinggi: ${nilaiTertinggi}`);

