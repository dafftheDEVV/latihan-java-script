let a = 8.3;
let c = "3.2";
let b = parseFloat(c);

let tambah = (a + b).toFixed(2);
let kurang = (a - b).toFixed(2);
let kali = (a * b).toFixed(2);
let bagi = (a / b).toFixed(5);

let aInt = parseInt(a);
let bInt = parseInt(b);
let mod = aInt % bInt;


console.log(`${a} + ${b} = ${tambah}`);
console.log(`${a} - ${b} = ${kurang}`);
console.log(`${a} * ${b} = ${kali}`);
console.log(`${a} / ${b} = ${bagi}`);
console.log(`${aInt} % ${bInt} = ${mod}`);

document.write(`${a} + ${b} = ${tambah}<br>`);
document.write(`${a} - ${b} = ${kurang}<br>`);
document.write(`${a} * ${b} = ${kali}<br>`);
document.write(`${a} / ${b} = ${bagi}<br>`);
document.write(`${aInt} % ${bInt} = ${mod}<br>`);