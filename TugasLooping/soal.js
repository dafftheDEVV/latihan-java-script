const prompt = require("prompt-sync")({ sigint: true });

// soal 1
console.log("Soal 1")
let cerdas4 = "";
for (let cerdas1 = 0; cerdas1 < 4; cerdas1++) {
    cerdas4 += "Cerdas ";
    if (cerdas1 < 3) cerdas4 += "";
}
console.log(cerdas4);

// soal 2
console.log("Soal 2")
let i = 0;
while (i < 5) {
    console.log("Cerdas");
    i++;
}

// soal 3
console.log("Soal 3")
const soal3 = ["A. Cerdas", "B. Cerdas", "C. Cerdas", "D. Cerdas"];
for (let Cerdas2 of soal3) {
    console.log(Cerdas2);
}

// soal 4
console.log("Soal 4")
let soal4 = ['1 2 3 4 5 = 15'];
for (let total1 of soal4) {
    console.log(total1);
}

// soal 5
console.log("soal 5")
let soal5 = ['1 + 2 + 3 + 4 + 5 = 15'];
for (let total2 of soal5) {
    console.log(total2);
}

// soal 6
console.log("Soal 6")
let soal6 = ['1', '2', '3', '4', '5', '--+', '15'];
for (let total3 of soal6) {
    console.log(total3);
}

// soal 7
console.log("Soal 7")
let ganjil = [1, 3, 5];
let soal7 = 0;
let teks7 = "";
for (let i = 0; i < ganjil.length; i++) {
  soal7 += ganjil[i];
  teks7 += ganjil[i] + (i < ganjil.length - 1 ? " + " : "");
}
console.log(teks7 + " = " + soal7);

// soal 8
console.log("Soal 8")
let genap = [2, 4, 6, 8, 10];
let soal8 = 0;
let teks8 = "";
for (let i = 0; i < genap.length; i++) {
  soal8 += genap[i];
  teks8 += genap[i] + (i < genap.length - 1 ? " + " : "");
}
console.log(teks8 + " = " + soal8);

// soal 9
console.log("Soal 9")
for (let i = 0; i < 5; i++) {
  let baris = "";
  for (let j = 1; j <= 5; j++) {
    baris += j + (j < 5 ? " " : "");
  }
  console.log(baris);
}

// soal 10
console.log("Soal 10")
for (let i = 0; i < 5; i++) {
  let baris = "";
  for (let j = 0; j < 6; j++) {
    baris += "a" + (j < 5 ? " " : "");
  }
  console.log(baris);
}

// soal 11
console.log("Soal 11")
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

// soal 12
console.log("Soal 12")
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 5; j >= i; j--) {
    baris += "*";
  }
  console.log(baris);
}

// soal 13
console.log("Soal 13")
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 4; j >= i; j--) {
    baris += "*";
  }
  console.log(baris);
}

// soal 14
console.log("Soal 14")
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}
console.log("*******");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 4; j >= i; j--) {
    baris += "*";
  }
  console.log(baris);
}

// soal 15 
console.log("Soal 15")
  for (let i = 1; i <= 5; i++) {
    let baris = ""; 

    
    for (let j = 5; j > i; j--) {
        baris += " ";
    }

    
    for (let k = 1; k <= (2 * i - 1); k++) {
        baris += "*";
    }

    console.log(baris);
}


// soal 16
console.log("Soal 16")
// Segitiga atas
for (let i = 1; i <= 5; i++) {
    let baris = "";

    // spasi
    for (let j = 5; j > i; j--) {
        baris += " ";
    }

    // buintang
    for (let k = 1; k <= (2 * i - 1); k++) {
        baris += "*";
    }

    console.log(baris);
}

// Segitiga bawah
for (let i = 5 - 1; i >= 1; i--) {
    let baris = "";

    // spasi
    for (let j = 5; j > i; j--) {
        baris += " ";
    }

    // bintang
    for (let k = 1; k <= (2 * i - 1); k++) {
        baris += "*";
    }

    console.log(baris);
}

// soal 17
console.log("Soal 17")

let huruf = ["a", "b", "c", "d", "e"];

for (let h = 0; h < huruf.length; h++) {
    let baris = "";
    for (let j = 0; j < 5; j++) {
        baris += huruf[h] + (j < 4 ? " " : ""); 
    }
    console.log(baris);
}
//DONE

