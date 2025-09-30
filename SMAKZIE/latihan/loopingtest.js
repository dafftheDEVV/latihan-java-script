const prompt = require("prompt-sync")({sigint: true})

 do {
    let warna = String(prompt("lampu lalu lintas"));
    if ( warna == "merah "){
        console.log("berhenti")
    } else if (warna == 'kuning') {
        console.log('bersiap')
    } else if (warna == 'hijau'){
        console.log('maju')
    } else{
        console.log('salah warna')
    }
diulang =prompt('diulang (y/n)')
}while(diulang == 'y' || diulang == 'y')
