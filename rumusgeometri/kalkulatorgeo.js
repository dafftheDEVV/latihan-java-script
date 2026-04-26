const prompt = require('prompt-sync')({ sigint: true });

console.log("Kalkulator Geometri");
console.log("Pilih bentuk geometri:");
console.log("===================");
console.log("Bangun Datar:");
console.log("===================");
console.log("1. Persegi");
console.log("2. Persegi Panjang");
console.log("3. Segitiga");
console.log("4. Jajar genjang");
console.log("5. Trapesium");
console.log("6. Belah ketupat");
console.log("7. Layang layang");
console.log("8. Lingkaran");
console.log("===================");
console.log("Bangun Ruang:");
console.log("===================");
console.log("9. Kubus");
console.log("10. Balok");
console.log("11. Prisma segitiga");
console.log("12. Limas");
console.log("13. Tabung");
console.log("14. Kerucut");
console.log("15. Bola");
console.log("0. Keluar");

const pilihan = prompt('masukan pilihan (1-15): ');

switch (pilihan) {
    case '1':
        let sisiPersegi = Number(prompt('Masukkan panjang sisi persegi: '));
        let luasPersegi = sisiPersegi * sisiPersegi;
        let kelilingPersegi = 4 * sisiPersegi;
        console.log(`Luas Persegi: ${luasPersegi}`);
        console.log(`Keliling Persegi: ${kelilingPersegi}`);
        break;
    case '2':
        let panjangPersegiPanjang = Number(prompt('Masukkan panjang persegi panjang: '));
        let lebarPersegiPanjang = Number(prompt('Masukkan lebar persegi panjang: '));
        let luasPersegiPanjang = panjangPersegiPanjang * lebarPersegiPanjang;
        let kelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);
        console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
        console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
        break;
    case '3':
        let alasSegitiga = Number(prompt('Masukkan alas segitiga: '));
        let tinggiSegitiga = Number(prompt('Masukkan tinggi segitiga: '));
        let sisiA = Number(prompt('Masukkan sisi a segitiga: '));
        let sisiB = Number(prompt('Masukkan sisi b segitiga: '));
        let sisiC = Number(prompt('Masukkan sisi c segitiga: '));
        let luasSegitiga = 0.5 * alasSegitiga * tinggiSegitiga; 
        let kelilingSegitiga = sisiA + sisiB + sisiC;
        console.log(`Luas Segitiga: ${luasSegitiga}`);
        console.log(`Keliling Segitiga: ${kelilingSegitiga}`);
        break;
    case '4':
        let alasJajarGenjang = Number(prompt('Masukkan alas jajar genjang: '));
        let tinggiJajarGenjang = Number(prompt('Masukkan tinggi jajar genjang: '));
        let sisiMiringJajarGenjang = Number(prompt('Masukkan sisi miring jajar genjang: '));
        let luasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;
        let kelilingJajarGenjang = 2 * (alasJajarGenjang + sisiMiringJajarGenjang);
        console.log(`Luas Jajar Genjang: ${luasJajarGenjang}`);
        console.log(`Keliling Jajar Genjang: ${kelilingJajarGenjang}`);
        break;
    case '5':
        let sisiATrapesium = Number(prompt('Masukkan sisi a trapesium: '));
        let sisiCTrapesium = Number(prompt('Masukkan sisi c trapesium: '));
        let sisiBTrapesium = Number(prompt('Masukkan sisi d trapesium: '));
        let tinggiTrapesium = Number(prompt('Masukkan tinggi trapesium: '));
        let luasTrapesium = 0.5 * (sisiATrapesium + sisiCTrapesium) * tinggiTrapesium;
        let kelilingTrapesium = sisiATrapesium + sisiBTrapesium + sisiCTrapesium + sisiDTrapesium;
        console.log(`Luas Trapesium: ${luasTrapesium}`);
        console.log(`Keliling Trapesium: ${kelilingTrapesium}`);
        break;
    case '6':
        let diagonal1BelahKetupat = Number(prompt('Masukkan diagonal 1 belah ketupat: '));
        let diagonal2BelahKetupat = Number(prompt('Masukkan diagonal 2 belah ketupat: '));
        let sisiBelahKetupat = Number(prompt('Masukkan sisi belah ketupat: '));
        let luasBelahKetupat = 0.5 * diagonal1BelahKetupat * diagonal2BelahKetupat;
        let kelilingBelahKetupat = 4 * sisiBelahKetupat;
        console.log(`Luas Belah Ketupat: ${luasBelahKetupat}`);
        console.log(`Keliling Belah Ketupat: ${kelilingBelahKetupat}`);
        break;
    case '7':
        let diagonal1LayangLayang = Number(prompt('Masukkan diagonal 1 layang-layang: '));
        let diagonal2LayangLayang = Number(prompt('Masukkan diagonal 2 layang-layang: '));
        let sisiLayangLayangA = Number(prompt('Masukkan sisi a layang-layang: '));
        let sisiLayangLayangB = Number(prompt('Masukkan sisi b layang-layang: '));
        let luasLayangLayang = 0.5 * diagonal1LayangLayang * diagonal2LayangLayang;
        let kelilingLayangLayang = 2 * (sisiLayangLayangA + sisiLayangLayangB);
        console.log(`Luas Layang-Layang: ${luasLayangLayang}`);
        console.log(`Keliling Layang-Layang: ${kelilingLayangLayang}`);
        break;
    case '8':
        let jariJariLingkaran = Number(prompt('Masukkan jari-jari lingkaran: '));
        let luasLingkaran = Math.PI * jariJariLingkaran * jariJariLingkaran;
        let kelilingLingkaran = 2 * Math.PI * jariJariLingkaran;
        console.log(`Luas Lingkaran: ${luasLingkaran}`);
        console.log(`Keliling Lingkaran: ${kelilingLingkaran}`);
        break;
    case '9':
        let sisiKubus = Number(prompt('Masukkan panjang sisi kubus: '));
        let luasKubus = 6 * sisiKubus * sisiKubus;
        let volumeKubus = sisiKubus * sisiKubus * sisiKubus;
        console.log(`Luas Permukaan Kubus: ${luasKubus}`);
        console.log(`Volume Kubus: ${volumeKubus}`);
        break;
    case '10':
        let panjangBalok = Number(prompt('Masukkan panjang balok: '));
        let lebarBalok = Number(prompt('Masukkan lebar balok: '));
        let tinggiBalok = Number(prompt('Masukkan tinggi balok: '));
        let luasBalok = 2 * (panjangBalok * lebarBalok + panjangBalok * tinggiBalok + lebarBalok * tinggiBalok);
        let volumeBalok = panjangBalok * lebarBalok * tinggiBalok;
        console.log(`Luas Permukaan Balok: ${luasBalok}`);
        console.log(`Volume Balok: ${volumeBalok}`);
        break;
    case '11':
        let alasPrismaSegitiga = Number(prompt('Masukkan alas prisma segitiga: '));
        let tinggiPrismaSegitiga = Number(prompt('Masukkan tinggi prisma segitiga: '));
        let tinggiSegitigaPrisma = Number(prompt('Masukkan tinggi segitiga prisma: '));
        let sisiASegitigaPrisma = Number(prompt('Masukkan sisi a segitiga prisma: '));
        let sisiBSegitigaPrisma = Number(prompt('Masukkan sisi b segitiga prisma: '));
        let sisiCSegitigaPrisma = Number(prompt('Masukkan sisi c segitiga prisma: '));
        let luasPrismaSegitiga = (alasPrismaSegitiga * tinggiSegitigaPrisma) + (sisiASegitigaPrisma + sisiBSegitigaPrisma + sisiCSegitigaPrisma) * tinggiPrismaSegitiga;
        let volumePrismaSegitiga = 0.5 * alasPrismaSegitiga * tinggiSegitigaPrisma * tinggiPrismaSegitiga;
        console.log(`Luas Permukaan Prisma Segitiga: ${luasPrismaSegitiga}`);
        console.log(`Volume Prisma Segitiga: ${volumePrismaSegitiga}`);
        break;
    case '12':
        let alasLimas = Number(prompt('Masukkan alas limas: '));
        let tinggiLimas = Number(prompt('Masukkan tinggi limas: '));
        let luasAlasLimas = alasLimas * alasLimas;
        let luasSelimutLimas = 2 * alasLimas * Math.sqrt((alasLimas / 2) ** 2 + tinggiLimas ** 2);
        let luasLimas = luasAlasLimas + luasSelimutLimas;
        let volumeLimas = (1/3) * luasAlasLimas * tinggiLimas;
        console.log(`Luas Permukaan Limas: ${luasLimas}`);
        console.log(`Volume Limas: ${volumeLimas}`);
        break;
    case '13':
        let jariJariTabung = Number(prompt('Masukkan jari-jari tabung: '));
        let tinggiTabung = Number(prompt('Masukkan tinggi tabung: '));
        let luasTabung = 2 * Math.PI * jariJariTabung * (jariJariTabung + tinggiTabung);
        let volumeTabung = Math.PI * jariJariTabung * jariJariTabung * tinggiTabung;
        console.log(`Luas Permukaan Tabung: ${luasTabung}`);
        console.log(`Volume Tabung: ${volumeTabung}`);
        break;
    case '14':
        let jariJariKerucut = Number(prompt('Masukkan jari-jari kerucut: '));
        let tinggiKerucut = Number(prompt('Masukkan tinggi kerucut: '));
        let garisPelukisKerucut = Math.sqrt(jariJariKerucut * jariJariKerucut + tinggiKerucut * tinggiKerucut);
        let luasKerucut = Math.PI * jariJariKerucut * (jariJariKerucut + garisPelukisKerucut);
        let volumeKerucut = (1/3) * Math.PI * jariJariKerucut * jariJariKerucut * tinggiKerucut;
        console.log(`Luas Permukaan Kerucut: ${luasKerucut}`);
        console.log(`Volume Kerucut: ${volumeKerucut}`);
        break;
    case '15':
        let jariJariBola = Number(prompt('Masukkan jari-jari bola: '));
        let luasBola = 4 * Math.PI * jariJariBola * jariJariBola;
        let volumeBola = (4/3) * Math.PI * jariJariBola * jariJariBola * jariJariBola;
        console.log(`Luas Permukaan Bola: ${luasBola}`);
        console.log(`Volume Bola: ${volumeBola}`);
        break;
    case '0':
        console.log("Terimakasih telah menggunakan kalkulator geometri.");
        break;
    default:
        console.log("Pilihan tidak tersedia, silakan pilih 1-15 atau 0 untuk keluar.");
        break;
}