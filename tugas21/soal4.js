// Soal 4
// Hari Selasa, 5 Agustus 2025
// Daffa Hafizh Firdaus X PPLG 2



const angka1 = 80.87;
const angka2 = "8.97";


const angka2Number = parseFloat(angka2);
const hasil = angka1 + angka2Number;


if (typeof window === "undefined") {
  
  console.log("Angka 1:", angka1);
  console.log("Angka 2:", angka2);
  console.log("Hasil penjumlahan:", hasil);
} else {
  
  window.onload = function () {
    document.getElementById("output").innerHTML =
      "Angka 1: " + angka1 + "<br>" +
      "Angka 2: " + angka2 + "<br>" +
      "Hasil penjumlahan: " + hasil;
  };
}
