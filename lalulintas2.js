const prompt = require('prompt-sync')({sigint : true});

let diulang = 'y';

let merah, kuning, hijau;
merah = 'berhenti'
kuning = 'bersiap'
hijau = 'jalan'

const lalulintas = prompt('Lampu apa yang menyala? (merah/kuning/hijau) : ')

switch (lalulintas) {
    case 'merah':
    case 'Merah':
        console.log('Lampu Merah : ' + merah)
        break;
    case 'kuning':
    case 'Kuning':
        console.log('Lampu Kuning : ' + kuning)
        break;
    case 'hijau':
    case 'Hijau':
        console.log('Lampu Hijau : ' + hijau)
        break;
    default:
        console.log('Pilih Warna Lampu yang tersedia')
        break;
}
