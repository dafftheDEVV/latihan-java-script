const prompt = require('prompt-sync')({sigint : true});

let diulang = true;
do {
    //menentukan huruf vokal
    console.log("Menentukan Huruf Vokal");
    let huruf = prompt("Masukkan sebuah huruf: ").toLowerCase();
    if (huruf == 'a' || huruf == 'i' || huruf == 'u' || huruf == 'e' || huruf == 'o') {
        console.log(`${huruf} adalah huruf vokal`);
    } else {
        console.log(`${huruf} adalah huruf konsonan`);
    }

    //menentukan angka ganjil atau genap
    let angka = parseInt(prompt("Masukkan sebuah angka: "));
    if (angka % 2 == 0) {
        console.log(`${angka} adalah angka genap`);
    } else {
        console.log(`${angka} adalah angka ganjil`);
    }



    jawab = prompt(`diulang (y/n)?`);
    diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);