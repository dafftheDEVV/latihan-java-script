const prompt = require('prompt-sync')({sigint: true});
// soal 1
console.log("Soal 1");
let namateman = ['Andi', 'Budi', 'Caca', 'Dodi', 'Eka'];
console.log(`Daftar nama teman: ${namateman}`);

// soal 2
console.log("Soal 2");
let angka = [10, 20, 30, 40, 50];
let totalangka = angka[0] + angka[1] + angka[2] + angka[3] + angka[4];
console.log(`Daftar angka: ${angka}`);
console.log(`Total angka: ${totalangka}`);
let jumlah = 0;
for(i = 0; i < angka.length; i++) {
    jumlah += angka[i];
    console.log(jumlah)
}

// soal 3
console.log("Soal 3");
let buah = ["apel", "jeruk", "mangga", "pisang", "semangka"];
for(i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

// soal 4
console.log("Soal 4");
let warna = ["merah", "biru", "hijau", "kuning", "ungu"];
warna.push("oranye");
warna.shift();
console.log(warna);