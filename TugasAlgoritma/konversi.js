const prompt = require('prompt-sync')({sigint : true});

let diulang = true;
do {

    // konversi detik ke jam, menit, detik

    let waktu = Number(prompt("Masukkan waktu dalam detik: "));
    let jam = parseInt(waktu / 3600);
    let sisa = waktu % 3600;
    let menit = parseInt(sisa / 60);
    let sisa1 = sisa % 60;

    console.log(`${jam} jam, ${menit} menit, ${sisa1} detik`);
    
    // konversi hari ke tahun, bulan, hari

    let Hari = Number(prompt("Masukkan Hari: "));
    let Tahun= parseInt(Hari / 365);
    let sisaTahun = Tahun % 365;
    let Bulan = parseInt(Hari / 30);
    let sisaBulan = sisa % 30;

    console.log(`${Tahun} Tahun, ${Bulan} Bulan, ${sisaBulan} Hari`);
    
    // selisih dua tanggal

    let hari1 = Number(prompt("Masukkan hari pertama (dd): "));
    let bulan1 = Number(prompt("Masukkan bulan pertama (mm): "));
    let tahun1 = Number(prompt("Masukkan tahun pertama (yy): "));


    let hari2 = Number(prompt("Masukkan hari kedua (dd): "));
    let bulan2 = Number(prompt("Masukkan bulan kedua (mm): "));
    let tahun2 = Number(prompt("Masukkan tahun kedua (yy): "));


    let total1 = tahun1 * 365 + bulan1 * 30 + hari1;
    let total2 = tahun2 * 365 + bulan2 * 30 + hari2;


    let selisih = total2 - total1;
    if (selisih < 0) selisih = -selisih;


    let tahun = parseInt(selisih / 365);
    let sisahari = selisih % 365;
    let bulan = parseInt(sisa / 30);
    let hari = sisahari % 30;


    console.log(`${tahun} Tahun, ${bulan} Bulan, ${hari} Hari`);


    jawab = prompt(`diulang (y/n)?`);
    diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);