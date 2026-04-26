const prompt = require('prompt-sync')({sigint:true});

// Menghitung gaji karyawan sesuai golongan
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jam_kerja = parseInt(prompt("Masukkan jam kerja: "));
let gaji = 0;

if (golongan === 'A') {
    if (jam_kerja > 48) {
        gaji = jam_kerja * 7000;
        console.log(`Gaji golongan A: ${gaji}, sudah termasuk gaji lembur`);
    } else {
        gaji = jam_kerja * 3000;
        console.log(`Gaji golongan A: ${gaji}`);
    }
} else if (golongan === 'B') {
    if (jam_kerja > 48) {
        gaji = jam_kerja * 8000;
        console.log(`Gaji golongan B: ${gaji}, sudah termasuk gaji lembur`);
    } else {
        gaji = jam_kerja * 3000;
        console.log(`Gaji golongan B: ${gaji}`);
    }
} else if (golongan === 'C') {
    if (jam_kerja > 48) {
        gaji = jam_kerja * 9000;
        console.log(`Gaji golongan C: ${gaji}, sudah termasuk gaji lembur`);
    } else {
        gaji = jam_kerja * 3000;
        console.log(`Gaji golongan C: ${gaji}`);
    }
} else if (golongan === 'D') {
    if (jam_kerja > 48) {
        gaji = jam_kerja * 10500;
        console.log(`Gaji golongan D: ${gaji}, sudah termasuk gaji lembur`);
    } else {
        gaji = jam_kerja * 3000;
        console.log(`Gaji golongan D: ${gaji}`);
    }
} else {
    console.log("Golongan tidak valid!");
}

