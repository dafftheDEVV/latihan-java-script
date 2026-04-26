// Lingkaran

const prompt = require("prompt-sync")({ sigint: true });

let jari_jari
let pi;

while (true) {
    jari_jari = parseFloat(prompt("Masukkan jari_jari: "));
    
    if(!isNaN(jari_jari) && jari_jari > 0) {
        
        if(jari_jari % 7 === 0) {
            pi = 22/7;
        } else {
            pi = 3.14;
        }
        break;
    }
    else {
        console.log("Input tidak valid. Silakan masukkan angka lebih dari 0 dan jangan berupa huruf atau karakter lain.");
    }
}
    
let luas = pi * jari_jari * jari_jari;
let keliling = 2 * pi * jari_jari;

console.log(`Luas Lingkaran: ${luas.toFixed(2)} cm²`);
console.log(`Keliling Lingkaran: ${keliling.toFixed(2)} cm³`);





