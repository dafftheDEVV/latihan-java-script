const prompt = require("prompt-sync")({ sigint : true });

// soal 1
console.log("Soal 1");
let array1 = ['beras', 'gula', 'telur', 'minyak'];
array1.push('kopi');
array1.splice(1, 1);
console.log(`${array1}`);

// soal 2
console.log("Soal 2");
let array2 = ['apel', 'pisang', 'jeruk', 'mangga', 'melon'];
console.log(array1.slice(0, 3));  // fungsi slice untuk mengambil sebagian elemen array sesuai index yang diinginkan dan sampai index ke berapa tetapi tidak termasuk index tersebut
// soal 3
console.log("Soal 3");
let array3 =  ['SMK', 'Negeri', '1', 'Cianjur'];
console.log(array3.join(' ')); // fungsi join untuk menggabungkan elemen array menjadi sebuah string dengan pemisah sesuai yang diinginkan

// soal 4
console.log("Soal 4");
let array4 = [1, 2, 4, 5];
array4.splice(2, 0, 3); // fungsi splice untuk menyisipkan elemen pada index tertentu tanpa menghapus elemen lain
console.log(array4);