const prompt = require("prompt-sync")({ sigint: true });

let i = 1
while (i < 10) {
    console.log(`${i}`);
    i++;
}

ulang = "y"
while (ulang == "y") {
    ulang = prompt("Ulangi lagi? (y/n): ");
    
}

let teks = ''
for(let i = 1; i <= 10; i++) 
    for(let j = 1; j <= 5; j++)
        teks += j
console.log(teks)