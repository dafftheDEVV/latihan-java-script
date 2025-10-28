// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

// Define functions for each soal so we can run them individually
function soal1() {
  let kata = "Cerdas";
  for (let i = 0; i < 5; i++) {
    process.stdout.write(kata + " ");
  }
  console.log("\n");
}

function soal2() {
  for (let i = 0; i < 4; i++) {
    console.log("Cerdas");
  }
}

function soal3() {
  let pilihan = ["A", "B", "C", "D"];
  for (let i = 0; i < pilihan.length; i++) {
    console.log(`${pilihan[i]}. Cerdas`);
  }
}

function soal4and5() {
  let sum = 0;
  let teksSum = "";
  for (let i = 1; i <= 5; i++) {
    sum += i;
    teksSum += i + (i < 5 ? " + " : " = ");
  }
  console.log(teksSum + sum);
}

function soal6() {
  let hasil6 = "";
  for (let i = 1; i <= 5; i++) {
    hasil6 += i + "\n";
  }
  // compute total programmatically instead of hardcode
  let total = 0;
  for (let i = 1; i <= 5; i++) total += i;
  hasil6 += "=\n" + total;
  console.log(hasil6);
}

function soal7() {
  let ganjil = [1, 3, 5];
  let totalGanjil = 0;
  let teksGanjil = "";
  for (let i = 0; i < ganjil.length; i++) {
    totalGanjil += ganjil[i];
    teksGanjil += ganjil[i] + (i < ganjil.length - 1 ? " + " : " = ");
  }
  console.log(teksGanjil + totalGanjil);
}

function soal8() {
  let totalGenap = 0;
  let teksGenap = "";
  for (let i = 2; i <= 10; i += 2) {
    totalGenap += i;
    teksGenap += i + (i < 10 ? " + " : " = ");
  }
  console.log(teksGenap + totalGenap);
}

function soal9() {
  for (let s = 1; s <= 5; s++) {
    let teks = "";
    for (let o = 1; o <= 5; o++) {
      teks += o;
    }
    console.log(teks);
  }
}

function soal10() {
  for (let i = 0; i < 5; i++) {
    let baris = "";
    for (let j = 0; j < 6; j++) {
      baris += "a";
    }
    console.log(baris);
  }
}

function soal11() {
  for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += "*";
    }
    console.log(baris);
  }
}

function soal12() {
  for (let i = 5; i >= 1; i--) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += "*";
    }
    console.log(baris);
  }
}

function soal13() {
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }
  for (let i = 4; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

function soal14() {
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

function soal15() {
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }
}

function soal16() {
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }
  for (let i = 4; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

function soal17() {
  let huruf = ["a", "b", "c", "d", "e"];
  for (let i = 0; i < huruf.length; i++) {
    let baris = "";
    for (let j = 0; j < 5; j++) {
      baris += huruf[i];
    }
    console.log(baris);
  }
}

// helper to run one by number or 'all'
function runSoal(n) {
  switch (String(n)) {
    case "1":
      soal1();
      break;
    case "2":
      soal2();
      break;
    case "3":
      soal3();
      break;
    case "4":
      soal4and5();
      break;
    case "5":
      soal4and5();
      break;
    case "6":
      soal6();
      break;
    case "7":
      soal7();
      break;
    case "8":
      soal8();
      break;
    case "9":
      soal9();
      break;
    case "10":
      soal10();
      break;
    case "11":
      soal11();
      break;
    case "12":
      soal12();
      break;
    case "13":
      soal13();
      break;
    case "14":
      soal14();
      break;
    case "15":
      soal15();
      break;
    case "16":
      soal16();
      break;
    case "17":
      soal17();
      break;
    case "all":
      // run all in order
      soal1();
      soal2();
      soal3();
      soal4and5();
      soal6();
      soal7();
      soal8();
      soal9();
      soal10();
      soal11();
      soal12();
      soal13();
      soal14();
      soal15();
      soal16();
      soal17();
      break;
    default:
      console.log("Pilihan tidak dikenali: " + n);
  }
}

// CLI entry: if an argument given, use it. Otherwise show interactive menu.
const arg = process.argv[2];
if (arg) {
  runSoal(arg);
} else {
  console.log("Pilih soal untuk dijalankan (1-17) atau ketik 'all' untuk semua. Ketik 'exit' untuk keluar.");
  while (true) {
    const pilihan = prompt('Masukkan pilihan: ');
    if (!pilihan) continue;
    if (pilihan.toLowerCase() === 'exit') {
      console.log('Keluar.');
      break;
    }
    runSoal(pilihan);
  }
}
