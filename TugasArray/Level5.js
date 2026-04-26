const prompt = require('prompt-sync')({sigint: true});

// soal 1
console.log("Soal 1");
let array1 = [5, 10, 15, 20, 25];
// mengambil kelipatan 10 dari setiap elemen array menggunakan map lalu mengkalikan dengan 2
let kelipatan10 = array1.filter(num => num % 10 === 0).map(num => num * 2); // fungsi filter untuk menyaring elemen array yang merupakan kelipatan 10
console.log(`Array awal: [${array1.join(', ')}]`);
console.log(`Kelipatan 10 dikali 2: [${kelipatan10.join(', ')}]`);

// soal 2
console.log("Soal 2");
// contoh array transaksi: type 'masuk' menambah saldo, 'keluar' mengurangi saldo
let transaksi = [
    { type: 'masuk', amount: 100000 },
    { type: 'keluar', amount: 25000 },
    { type: 'masuk', amount: 50000 },
    { type: 'keluar', amount: 10000 }
];

// hitung saldo akhir mulai dari 0
let saldoAkhir = transaksi.reduce((saldo, t) => {
    return t.type === 'masuk' ? saldo + t.amount : saldo - t.amount;
}, 0);

// tampilkan detail dan hasil
console.log("Daftar transaksi:");
transaksi.forEach((t, i) => console.log(`${i + 1}. ${t.type} - Rp${t.amount.toLocaleString()}`)); // fungsi toLocaleString untuk format angka dengan pemisah ribuan
console.log(`Saldo akhir: Rp${saldoAkhir.toLocaleString()}`);

// soal 3
console.log("Soal 3");
let array3 = [75, 90, 60, 100, 80];
// urut dari terbesar ke terkecil (elemen adalah angka)
let urutNilai = array3.slice().sort((a, b) => b - a);
console.log("Nilai diurutkan dari terbesar ke terkecil:");
urutNilai.forEach((nilai, index) => {
    console.log(`${index + 1}. ${nilai}`);
});
// tampilkan peringkat ke-3
let peringkat3 = urutNilai[2];
console.log(`Nilai peringkat ke-3: ${peringkat3}`);

// soal 4
console.log("Soal 4");
let siswaA = ['Andi', 'Budi', 'Citra'];
let siswaB = ['Budi', 'Dewi', 'Eka'];

// gabungkan tanpa duplikat (mempertahankan urutan dari siswaA lalu siswaB)
let gabungan = [...siswaA, ...siswaB.filter(n => !siswaA.includes(n))]; // fungsi filter untuk menambahkan hanya elemen dari siswaB yang tidak ada di siswaA
// fungsi includes untuk memeriksa keberadaan elemen dalam array
console.log('Gabungan tanpa duplikat:', gabungan);

