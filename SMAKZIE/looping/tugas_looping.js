// npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})

// SOAL 1
{
  let teks = "Cerdas";

  for (let i = 0; i < 5; i++) {
    process.stdout.write(teks + " "); 
  }
  console.log("\n");
}

// SOAL 2
{
  for (let i = 0; i < 4; i++) {
    console.log("Cerdas");
  }
}

// SOAL 3
{
  let pilihan = ["A", "B", "C", "D"];
  for (let i = 0; i < pilihan.length; i++) {
    console.log(`${pilihan[i]}. Cerdas`);
  }
}

// SOAL 4 & 5
{
  let sum = 0;
  let teksSum = "";
  for (let i = 1; i <= 5; i++) {
    sum += i;
    teksSum += i + (i < 5 ? " + " : " = ");
  }
  console.log(teksSum + sum);
}

// SOAL 6
{
  let hasil6 = "";
  for (let i = 1; i <= 5; i++) {
    hasil6 += i + "\n";
  }
  // show the plus sign and the total on the next lines to match the picture
  hasil6 += "+\n15";
  console.log(hasil6);
}

// SOAL 7
{
  let ganjil = [1, 3, 5];
  let totalGanjil = 0;
  let teksGanjil = "";
  for (let i = 0; i < ganjil.length; i++) {
    totalGanjil += ganjil[i];
    teksGanjil += ganjil[i] + (i < ganjil.length - 1 ? " + " : " = ");
  }
  console.log(teksGanjil + totalGanjil);
}

// SOAL 8
{
  let totalGenap = 0;
  let teksGenap = "";
  for (let i = 2; i <= 10; i += 2) {
    totalGenap += i;
    teksGenap += i + (i < 10 ? " + " : " = ");
  }
  console.log(teksGenap + totalGenap);
}

// SOAL 9
{
  for (let s = 1; s <= 5; s++) {
    let teks = "";
    for (let o = 1; o <= 5; o++) {
      teks += o;
    }
    console.log(teks);
  }
}

// SOAL 10
{
  for (let i = 0; i < 5; i++) {
    let baris = "";
    for (let j = 0; j < 6; j++) {
      baris += "a";
    }
    console.log(baris);
  }
}

// SOAL 11
{
  for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += "*";
    }
    console.log(baris);
  }
}

// SOAL 12
{
  for (let i = 5; i >= 1; i--) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += "*";
    }
    console.log(baris);
  }
}

// SOAL 13
{
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }
  for (let i = 4; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}


// SOAL 14
{
  // The original file left SOAL 14 empty. Add a small pyramid to illustrate another loop pattern.
  let height = 5;
  for (let i = 1; i <= height; i++) {
    let spaces = "".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// SOAL 15
{
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }
}

//
