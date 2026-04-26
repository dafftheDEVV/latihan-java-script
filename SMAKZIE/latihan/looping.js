// npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})

let i = 2010
while (i <= 2025) {
    console.log(i)
    i++
}

let b = 1
while (b <= 15) {
    console.log(b)
    b +=2
}

let c = 0
while (c <= 16) {
    console.log(c)
    c +=2
}

let g = 10
while (g <= 70) {
    console.log(g)
    g += 10
}

let f = 10
while (f >= 1) {
    console.log(f)
    f -= 1
}

const pengali = 13
let n = 1
while (n <= 10) {
    console.log(`${pengali} * ${n} = ${pengali * n}`)
    n++
}
for (let s = 1; s <= 10; s++) {
    let teks = " ";
for (let o = 1; o <= 5; o++)
    teks += o
console.log(teks)
}