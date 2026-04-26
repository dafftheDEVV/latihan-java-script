const prompt = require('prompt-sync')({sigint : true});

let diulang = true;
do {
//titik x dan y
console.log("Menentukan Kuadran Titik (x,y)");
let x = Number(prompt("Masukkan titik x: "));
let y = Number(prompt("Masukkan titik y: "));

if (x > 0 && y > 0) {
    console.log(`Titik (${x},${y}) berada di kuadran I`);
} else if (x < 0 && y > 0) {
    console.log(`Titik (${x},${y}) berada di kuadran II`);
} else if (x < 0 && y < 0) {
    console.log(`Titik (${x},${y}) berada di kuadran III`);
} else if (x > 0 && y < 0) {
    console.log(`Titik (${x},${y}) berada di kuadran IV`);
}
//berapa lama seorang bekerja dalam 1 minggu
console.log("Menghitung Gaji Karyawan");
let jam_kerja = parseInt(prompt("masukkan jam:"))
if (jam_kerja > 48) {
    let gaji = jam_kerja * 3000
    console.log(`gaji anda adalah: ${gaji}, sudah termasuk gaji lembur`);
} else if (jam_kerja <= 48) {
    gaji = jam_kerja * 2000
    console.log(`gaji anda adalah ${gaji}`);
}

//menentukan tahun kabisat atau bukan
console.log("Menentukan Tahun Kabisat");
let tahun = parseInt(prompt("Masukkan tahun: "));

if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
    console.log(`${tahun} adalah tahun kabisat`);
} else {
    console.log(`${tahun} bukan tahun kabisat`);
}

//menentukan bilangan positif, negatif, atau nol
console.log("Menentukan Bilangan Positif, Negatif, atau Nol");
let bilangan = parseInt(prompt('Masukkan bilangan bulat:'))

if (bilangan > 0) {
    console.log('bilangan positif')
} else if (bilangan < 0) {
    console.log('bilangan negatif')
} else if (bilangan == 0) {
    console.log('nol')
}
    
//menentukan nilai
console.log("Menentukan Nilai");
let nilai = Number(prompt('Masukkan nilai Anda : '));
    if (nilai >= 85 && nilai <= 100) 
        console.log('Nilai Anda A');
    else if (nilai >= 80 && nilai < 85) 
        console.log('Nilai Anda B');
    else if (nilai >= 75 && nilai < 80) 
        console.log('Nilai Anda C');
    else if (nilai >= 60 && nilai < 75) 
        console.log('Nilai Anda D');
    else if (nilai < 60 && nilai >= 0) 
        console.log('Nilai Anda E');
    else 
        console.log('Nilai Invalid');

//angka 1-4
console.log("Menentukan Angka 1-4");
let angka = Number(prompt('Masukkan angka 1-4: '));
switch (angka) {
    case 1:
        console.log('Satu');
        break;
    case 2:
        console.log('Dua');
        break;
    case 3:
        console.log('Tiga');
        break;
    case 4:
        console.log('Empat');
        break;
    default:
        console.log('Angka yang dimasukkan salah! Harus antara 1 sampai 4.');
        break;
}

//menentukan bulan
console.log("Menentukan Nama Bulan");
let bulan = parseInt(prompt("Masukkan nomor bulan (1-12): "));
switch (bulan) {
    case 1:
        console.log("Januari");
        break;
    case 2:
        console.log("Februari");   
        break;
    case 3:
        console.log("Maret");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mei");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
        break;
    case 8:
        console.log("Agustus");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("Desember");
        break;
    default:
        console.log("Nomor bulan tidak valid!");
        break;
}

//kelipatan 4
console.log("kelipatan 4")
let angka2 = parseInt(prompt("Masukkan angka kelipatan 4: "))

if (angka2 % 4 == 0){
    console.log("kelipatan 4")
} else {
    console.log("bukan kelipatan 4")
}
    
//diskon jika total belanjanya lebih dari 100ribu
let totalBelanja = parseInt(prompt("Masukkan total belanja Anda: "));
let diskon = 0;
let totalSetelahDiskon = totalBelanja;

if (totalBelanja > 100000) {
    diskon = totalBelanja * 0.10;
    totalSetelahDiskon = totalBelanja - diskon;
    console.log(`Selamat! Anda mendapat diskon 10%.`);
} else {
    console.log(`Maaf, Anda tidak mendapat diskon.`);
}

console.log(`Diskon: Rp${diskon}`);
console.log(`Total yang harus dibayar: Rp${totalSetelahDiskon}`);








jawab = prompt(`diulang (y/n)?`);
diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);