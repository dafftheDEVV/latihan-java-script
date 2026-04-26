const prompt = require('prompt-sync')({sigint : true});


let diulang = true;
do {
    // konversi jarak cm ke km dan m ke km
    console.log("Konversi Jarak");
    let jarak_cm = Number(prompt("Masukkan jarak dalam cm: "));
    let cm_ke_km = Number(jarak_cm / 100000);
    let sisa_cm = Number(jarak_cm % 100000);
    let m = Number(sisa_cm / 1000);
    let sisa_m = Number(m % 1000);
    

    console.log(`jarak cm: ${jarak_cm} di konversi ke km menjadi: ${cm_ke_km.toFixed(2)} km dan sisanya adalah: ${sisa_cm.toFixed(2)} cm`);
    console.log(`jarak m: ${sisa_cm} di konversi ke km menjadi: ${m.toFixed(2)} km dan sisanya adalah: ${sisa_m.toFixed(2)} m`);

    //konversi meter ke kaki, yard, dan inchi
    console.log("Konversi Meter");
    let meter = Number(prompt("Masukkan jarak dalam meter: "));
    let kaki = parseFloat(meter * 30.48);
    let sisa_kaki = parseFloat(meter % 30.48);
    let yard = parseFloat(sisa_kaki * 0.9144);
    let sisa_yard = parseFloat(sisa_kaki % 0.9144);
    let inchi = parseFloat(sisa_yard * 2.54);

    console.log(`jarak meter: ${meter} di konversi ke kaki menjadi: ${kaki.toFixed(2)} kaki, di konversi ke yard menjadi: ${yard.toFixed(2)} yard, di konversi ke inchi menjadi: ${inchi.toFixed(2)} inchi`);
    
    //berat badan ideal
    console.log("Berat Badan Ideal");
    let tinggi_badan = Number(prompt("Masukkan tinggi badan dalam cm: "));
    let berat_badan = parseInt(tinggi_badan - 100);
    let berat_badan_ideal = berat_badan - (0.1 * berat_badan);
    
    console.log(`Berat badan ideal untuk tinggi ${tinggi_badan} cm adalah ${berat_badan_ideal.toFixed(2)} kg`);
    
    //nilai uang rupiah dalam keliaptan 25
    console.log("Konversi Uang Rupiah");
    let uang = parseInt(prompt("Masukkan jumlah uang (kelipatan 25): "));
    let r1000 = parseInt(uang / 1000);
    uang = uang % 1000;
    let r500 = parseInt(uang / 500);
    uang = uang % 500;
    let r100 = parseInt(uang / 100);
    uang = uang % 100;
    let r50 = parseInt(uang / 50);
    uang = uang % 50;
    let r25 = parseInt(uang / 25);

console.log(`Jumlah pecahan:`);
console.log(`Rp1000 = ${r1000} lembar`);
console.log(`Rp500  = ${r500} lembar`);
console.log(`Rp100  = ${r100} lembar`);
console.log(`Rp50   = ${r50} lembar`);
console.log(`Rp25   = ${r25} lembar`);


    
    let jawab = prompt(`diulang (y/n)?`);
    diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);

    
    