// Kalkulator Suhu 

const prompt= require("prompt-sync")({ sigint: true });
// Dibuat Tanggal 4 Agustus 2025
// Penulis: Daffa HAfizh Firdaus

// Menu Pilihan
console.log("=== kalkulator Suhu ==="); 
console.log("1. Fahreinheit");
console.log("2. Kelvin");
console.log("3. Reamur");
console.log("4. keluar");

let pilihan = parseInt(prompt("Masukkan pilihan (1-4): ")); 

if (pilihan === 1) {
    // Fahreinheit  
    let Celcius = parseFloat(prompt("Masukan Suhu Celcius "));
    let Fahrenheit = (Celcius * 9/5) + 32
    console.log(`Suhu Fahreinheit: ${Fahrenheit} Derajat`);
}

else if (pilihan === 2) {
    // Kelvin
    let Celcius = parseFloat(prompt("Masukan Suhu Celcius: "));
    Kelvin = Celcius + 273.15;
    console.log(`Suhu Kelvin: ${Kelvin} Derajat`);
}

else if (pilihan === 3) {
    // Reamur
    let Celcius = parseFloat(prompt("Masukan Suhu Celcius: "));
    let Reamur = Celcius * 4/5;
    console.log(`Suhu Reamur: ${Reamur} Derajat`);
}
else if (pilihan === 4) {
    console.log("Maacih udah pakai kalkulator suhu ni lope yu");
}

