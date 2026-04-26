const prompt = require("prompt-sync")({ sigint: true });


// tahun
console.log("Tahun")
let tahun = 2010
while (tahun <= 2025) {
    console.log(`${tahun}`);
    tahun++;
}

// genap
console.log("genap")
let genap = 0
while (genap <= 16) {
    console.log(`${genap}`);
    genap += 2;
}

// ganjil
console.log("ganjil")
let ganjil = 1
while (ganjil <= 15) {
    console.log(`${ganjil}`);
    ganjil += 2;
}

// hitung mundur
console.log("hitung mundur")
let hitung_mundur = 10
while (hitung_mundur >= 0) {
    console.log(`${hitung_mundur}`);
    hitung_mundur--;
}


// kelipatan 10
console.log("kelipatan 10")
let kelipatan = 10
while (kelipatan <= 70) {
    console.log(`${kelipatan}`);
    kelipatan += 10;
}


// pengalian
console.log("Pengalian")
const pengalinan = prompt("Masukkan angka pengalian: ");
let i = 1
while (i <= 10) {
    console.log(`${pengalinan} x ${i} = ${pengalinan * i}`);
    i++;
}
