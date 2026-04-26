const prompt = require("prompt-sync")({ sigint: true });

// soal 1
console.log("Soal 1");
let array1 =  [1, 2, 3, 4, 5, 6, 7, 8];
let hasil1 = array1.map((num) => num * 2); // fungsi map untuk mengalikan setiap elemen array dengan 2 atau sesuai operasi yang diinginkan
//  lalu fungsi num akan mewakili setiap elemen array
console.log(hasil1);

// soal 2
console.log("Soal 2");
let array2 = [80, 90, 70, 100, 85];
// hitung rata-rata dengan reduce lalu bagi dengan panjang array
let sum = array2.reduce((acc, val) => acc + val, 0); // fungsi sum untuk menjumlahkan semua elemen array, acc adalah accumulator yang menyimpan hasil penjumlahan sementara, 
// val adalah nilai elemen saat ini
let rataRata = sum / array2.length;
console.log(`Array: [${array2.join(', ')}]`);
console.log(`Rata-rata: ${rataRata}`);

// soal 3
console.log("Soal 3");
let array3 = [1, 2, 3, 4];
// membuat array baru yang berisi setiap elemen dikali 2.
let arrayBaru = array3.map((num) => num * 2);
console.log(`Array awal: [${array3.join(', ')}]`);
console.log(`Array baru (dikali 2): [${arrayBaru.join(', ')}]`);

// soal 4
console.log("Soal 4");
// array objek siswa
let siswa = [
    { nama: 'Andi', nilai: 85 },
    { nama: 'Budi', nilai: 65 },
    { nama: 'Citra', nilai: 70 }
]; // fungsi tanda kurung kurawal {} untuk membuat objek dengan properti nama dan nilai
// filter siswa dengan nilai >= 70
let lulus = siswa.filter(s => s.nilai >= 70); // fungsi filter untuk menyaring elemen array berdasarkan kondisi tertentu,
// fungsi s mewakili setiap elemen objek dalam array siswa
console.log("Siswa yang nilainya >= 70:");    
lulus.forEach(s => console.log(`${s.nama} - ${s.nilai}`)); // fungsi forEach untuk menampilkan setiap elemen dalam array lulus


