const prompt = require("prompt-sync")({ sigint: true });

let diulang = true;
do {

//menentukan angka bulan dengan nama bulan dan total berapa hari dalam bulan tersebut
console.log("Menentukan Jumlah Hari dalam Sebuah Bulan");

let angka_bulan = parseInt(prompt("Masukkan nomor bulan (1-12): "));
let tahun2 = parseInt(prompt("Masukkan tahun (misal: 2023): "));
let hari;

switch (angka_bulan) {

    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        hari = 31;
        break;

    
    case 4: case 6: case 9: case 11:
        hari = 30;
        break;

    
    case 2:
    
        if ((tahun2 % 4 === 0 && tahun2 % 100 !== 0) || (tahun2 % 400 === 0)) {
            hari = 29;
        } else {
            hari = 28;
        }
        break;

    
    default:
        console.log("Nomor bulan tidak valid!");
        hari = 0;
        break;
}


if (hari > 0) {
    console.log(`Jumlah hari pada bulan ke-${angka_bulan} tahun ${tahun2} adalah ${hari} hari.`);
}

 let jawab = prompt('diulang? (y/n)')
 diulang = jawab == "y" || jawab == "Y" ? true : false;

} while (diulang = true)