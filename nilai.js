const prompt = require('prompt-sync')({sigint : true});
let diulang = 'y';

do {
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
    diulang = prompt('Ulangi lagi? (y/n) : ');
} while (diulang == 'y' || diulang == 'Y');
