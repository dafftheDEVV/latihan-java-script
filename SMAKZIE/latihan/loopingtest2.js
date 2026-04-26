const prompt = require("prompt-sync")({sigint: true})

 do {
    let nilai = Number(prompt("predikat nilai:"));
    if ( nilai >= 86 && nilai <= 100){
        console.log("A")
    } else if (nilai >= 80 && nilai <= 85) {
        console.log('B')
    } else if (nilai >= 75 && nilai <= 79){
        console.log('C')
    } else if (nilai >= 60 && nilai <= 74){
        console.log('D')
    } else if (nilai >= 0 && nilai <= 60){
        console.log('idiot')
    } else{
        console.log('predikat mana itu lol')
    }
diulang =prompt('diulang (y/n)')
}while(diulang == 'y' || diulang == 'y')
