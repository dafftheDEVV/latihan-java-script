// npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})

// SOAL 1
let kata = "Cerdas";

for (let i = 0; i < 5; i++) {
  process.stdout.write(kata + " "); 
}
console.log("\n");

// SOAL 2
for (let i = 0; i < 4; i++) {
  console.log("Cerdas");
}

// SOAL 3
let pilihan = ["A", "B", "C", "D"];
for (let i = 0; i < pilihan.length; i++) {
  console.log(`${pilihan[i]}. Cerdas`);
}

// SOAL 4 & 5
let sum = 0;
let teksSum = "";
for (let i = 1; i <= 5; i++) {
  sum += i;
  teksSum += i + (i < 5 ? " + " : " = ");
}
console.log(teksSum + sum);

// SOAL 6
let hasil6 = "";
for (let i = 1; i <= 5; i++) {
  hasil6 += i + "\n";
}
// Tambahkan tanda sama dengan dan total
hasil6 += "=\n15";
console.log(hasil6);

// SOAL 7
let ganjil = [1, 3, 5];
let totalGanjil = 0;
let teksGanjil = "";
for (let i = 0; i < ganjil.length; i++) {
  totalGanjil += ganjil[i];
  teksGanjil += ganjil[i] + (i < ganjil.length - 1 ? " + " : " = ");
}
console.log(teksGanjil + totalGanjil);

// SOAL 8
let totalGenap = 0;
let teksGenap = "";
for (let i = 2; i <= 10; i += 2) {
  totalGenap += i;
  teksGenap += i + (i < 10 ? " + " : " = ");
}
console.log(teksGenap + totalGenap);

// SOAL 9
for (let s = 1; s <= 5; s++) {
  let teks = "";
  for (let o = 1; o <= 5; o++) {
    teks += o;
  }
  console.log(teks);
}

// SOAL 10
for (let i = 0; i < 5; i++) {
  let baris = "";
  for (let j = 0; j < 6; j++) {
    baris += "a";
  }
  console.log(baris);
}

// SOAL 11
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

// SOAL 12
for (let i = 5; i >= 1; i--) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

// SOAL 13
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}

// SOL 14
function cetakPola14() {
    const ukuran = 5;
    for (let i = 1; i <= ukuran; i++) {
        let baris = "";
        // Spasi
        for (let j = 1; j < i; j++) {
            baris += " ";
        }
        // Bintang
        for (let k = 0; k < 2 * (ukuran - i) + 1; k++) {
            baris += "*";
        }
        console.log(baris);
    }
}


// SOAL 15
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// SOAL 16
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}

// SOAL 17
let huruf = ["a", "b", "c", "d", "e"];
for (let i = 0; i < huruf.length; i++) {
  let baris = "";
  for (let j = 0; j < 5; j++) {
    baris += huruf[i];
  }
  console.log(baris);
}
