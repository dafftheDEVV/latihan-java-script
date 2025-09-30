// npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})

// SOAL 1
let teks = "Cerdas";

for (let i = 0; i < 5; i++) {
  process.stdout.write(teks + " "); 
}
console.log("\n");

// SOAL 9
for (let s = 1; s <= 5; s++) {
    let teks = " ";
for (let o = 1; o <= 5; o++)
    teks += o
console.log(teks)
}

//  SOAL 12
//for (let i = 1; )
