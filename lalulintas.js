const prompt = require('prompt-sync')({sigint : true});

let diulang = 'y';

let merah = 'berhenti';
let kuning = 'bersiap';
let hijau = 'jalan';

do {
    let lampu = prompt('Masukkan warna lampu (merah/kuning/hijau) : ');
    if (lampu.toLowerCase() === 'merah') {
        console.log('Lampu Merah : ' + merah);
    } else if (lampu.toLowerCase() === 'kuning') {
        console.log('Lampu Kuning : ' + kuning);
    } else if (lampu.toLowerCase() === 'hijau') {
        console.log('Lampu Hijau : ' + hijau);
    } else {
        console.log('Peringatan: Input warna lampu salah/typo!');
    }
    diulang = prompt('Ulangi lagi? (y/n) : ');
} while (diulang.toLowerCase() === 'y');
