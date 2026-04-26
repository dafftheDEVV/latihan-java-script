// Soal 15
// Hari Selasa, 5 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2


const prompt = require("prompt-sync")({ sigint: true });


while (true) {
    const input = prompt("Masukkan nomor: ");
    if (input === "78821") {
        console.log("You are authenticated");
        break;
    } else {
        console.log("access denied");
    }
}
