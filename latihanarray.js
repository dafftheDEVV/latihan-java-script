const prompt = require('prompt-sync')({sigint : true});
// pembuatan array literal
const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
console.log(hari.length);
// manipulasi nilai array
hari[0] = 'Monday';
console.log(hari[0])
//menambahkan nilai array
hari.push = ('Ahad'); // tambah di akhir
console.log(hari.length);
hari.unshift('Friday'); //tambah di awal
//menghapus nilai array
// bisa menggunakan delete, dan splice
hari.splice(5,1); // maksud dari code ini adalah dari index ke 5 dihapus 1 elemen jika mau lebih dari 1 elemen maka tinggal diubah angka keduanya
console.log(hari.length);
delete hari[4]; 
console.log(hari.length);
// bisa juga menggunakan pop dan shift
hari.pop(); //menghapus elemen terakhir
console.log(hari.length);
hari.shift(); //menghapus elemen pertama
console.log(hari.length);
// pembuatan constructor array
const day = new Array();
const month = new Array(12);
//dengan array.from
const myname = Array.from('Amzhar');
// array destructuring
const name = ['Amzhar', 'Cianjur'];
const [nama, kota] = name;
console.log(nama);
console.log(kota);


console.log(hari);
console.log(day);
console.log(month);
console.log(myname);