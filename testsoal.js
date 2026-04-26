// Kalkulator bangun ruang
const prompt= require("prompt-sync")({ sigint: true });
// Dibuat Tanggal 1 Agustus 2025
// Penulis: Daffa HAfizh Firdaus

// Menu Pilihan
console.log("=== Kalkulator bangun ruang ==="); 
console.log("1. Persegi");
console.log("2. Tabung");
console.log("3. Lingkaran");
console.log("4. Bola");
console.log("5. Trapesium");
console.log("6. segitiga");
console.log("7. balok");
console.log("8. limas segiempat");
console.log("9. keluar");

let pilihan = parseInt(prompt("Masukkan pilihan (1-8): ")); 

if (pilihan === 1) {
    // Persegi
    let sisi = parseFloat(prompt("Masukkan panjang sisi persegi: "));
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    console.log(`Luas Persegi: ${luas.toFixed(2)} cm²`);
    console.log(`Keliling Persegi: ${keliling.toFixed(2)} cm`);
}

else if (pilihan === 2) {
    // Tabung
    let jariJari = parseFloat(prompt("Masukkan jari-jari tabung: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi tabung: "));
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);
    let volume = Math.PI * jariJari * jariJari * tinggi;
    console.log(`Luas Permukaan Tabung: ${luasPermukaan.toFixed(2)} cm²`);
    console.log(`Volume Tabung: ${volume.toFixed(2)} cm³`);
}

else if (pilihan === 3) {
    // Lingkaran
    let jariJari = parseFloat(prompt("Masukkan jari-jari lingkaran: "));
    let luas = Math.PI * jariJari * jariJari;
    let keliling = 2 * Math.PI * jariJari;
    console.log(`Luas Lingkaran: ${luas.toFixed(2)} cm²`);
    console.log(`Keliling Lingkaran: ${keliling.toFixed(2)} cm`);
}

else if (pilihan === 4) {
    // Bola
    let jariJari = parseFloat(prompt("Masukkan jari-jari bola: "));
    let luasPermukaan = 4 * Math.PI * jariJari * jariJari;
    let volume = (4/3) * Math.PI * jariJari * jariJari * jariJari;
    console.log(`Luas Permukaan Bola: ${luasPermukaan.toFixed(2)} cm²`);
    console.log(`Volume Bola: ${volume.toFixed(2)} cm³`);
}

else if (pilihan === 5) {
    // Trapesium
    let a = parseFloat(prompt("Masukkan panjang sisi atas trapesium: "));
    let b = parseFloat(prompt("Masukkan panjang sisi bawah trapesium: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi trapesium: "));
    let luas = ((a + b) / 2) * tinggi;
    console.log(`Luas Trapesium: ${luas.toFixed(2)} cm²`);
}

else if (pilihan === 6) {
    // Segitiga
    let alas = parseFloat(prompt("Masukkan panjang alas segitiga: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi segitiga: "));
    let luas = (alas * tinggi) / 2;
    console.log(`Luas Segitiga: ${luas.toFixed(2)} cm²`);
}

else if (pilihan === 7) {
    // Balok
    let panjang = parseFloat(prompt("Masukkan panjang balok: "));
    let lebar = parseFloat(prompt("Masukkan lebar balok: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi balok: "));
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    let volume = panjang * lebar * tinggi;
    console.log(`Luas Permukaan Balok: ${luasPermukaan.toFixed(2)} cm²`);
    console.log(`Volume Balok: ${volume.toFixed(2)} cm³`);
}

else if (pilihan === 8) {
    // Limas Segiempat
    let sisi = parseFloat(prompt("Masukkan panjang sisi alas limas: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi limas: "));
    let luasAlas = sisi * sisi;
    let luasSisiMiring = (sisi * Math.sqrt((sisi / 2) ** 2 + tinggi ** 2)) / 2;
    let luasPermukaan = luasAlas + 4 * luasSisiMiring;
    let volume = (1/3) * luasAlas * tinggi;
    console.log(`Luas Permukaan Limas Segiempat: ${luasPermukaan.toFixed(2)} cm²`);
    console.log(`Volume Limas Segiempat: ${volume.toFixed(2)} cm³`);
}

else if (pilihan === 9) {
    console.log("Maacih udah pakai kalkulator bangun ruang ni lope yu");
}