const prompt = require("prompt-sync")({ sigint: true });

let diulang = true;
do {
    // Increment waktu hh:mm:ss
let jam = parseInt(prompt("Masukkan jam: "));
let menit = parseInt(prompt("Masukkan menit: "));
let detik = parseInt(prompt("Masukkan detik: "));


detik = detik + 1;

if (detik == 60) {
    detik = 0;
    menit = menit + 1;
}

if (menit == 60) {
    menit = 0;
    jam = jam + 1;
}

if (jam == 24) {
    jam = 0;
}

console.log(`Waktu baru adalah ${jam}:${menit}:${detik}`);


let jawab = prompt(`diulang (y/n)?`);
diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);