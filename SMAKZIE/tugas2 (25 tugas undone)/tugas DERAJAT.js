// npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})
let celcius, kelvin
celcius = parseInt(prompt('suhu (C) : '))
kelvin = (celcius + 273.15)

console.log(`celcius   :${celcius} °C`)
console.log(`kelvin    :${kelvin} K`)