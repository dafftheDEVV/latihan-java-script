const prompt = require("prompt-sync")({sigint: true})

let diulang = true;
do {
    let detik = Number(prompt("berapa detik : "));
    let jam = parseInt(detik / 3600);
    let sisa = detik % 3600;
    let menit = parseInt(sisa / 60);
    let sisaDetik = sisa % 60;
    console.log(`hasil konversi:`);
    console.log(`${jam} jam ${menit} menit ${sisaDetik} detik`);
    let jawab = prompt('diulang (y/n) ? ');
    diulang = jawab == 'y' || jawab == 'Y';
} while (diulang);