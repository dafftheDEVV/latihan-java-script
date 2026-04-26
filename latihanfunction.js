const prompt = require('prompt-sync') ({sigint: true});
// return function
function convertCtoF(c) {
    return  (9 / 5) * c + 32;
}
console.log(`Hasil konversi celcius ke fahreinheit: ${convertCtoF(100)}`)

// arrow function
let luas = 0;
const hitungluasP = (p, l) => p * l
const hitungluasP2 = (p, l) => {
    luas = p * l
}
console.log(hitungluasP2(1,2))