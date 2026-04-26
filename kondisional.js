const prompt = require('prompt-sync')({sigint : true});

let diulang = 'y';
do {
    let suhu = Number(prompt('Masukkan suhu :'))
if (suhu >= 100) 
    console.log ('Uap')
    else if (suhu < 100 && suhu > 0) 
        console.log ('Cair')
    else if (suhu <= 0)
        console.log ('padat')

    diulang = prompt('Ulangi lagi? (y/n) : ')
}while (diulang == 'y' || diulang == 'Y');