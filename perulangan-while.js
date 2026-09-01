"use strict";
const output5 = document.getElementById('output');
const inputBatas5 = prompt('Masukkan batas:');
const batas5 = Number(inputBatas5);
let angka5 = 1;
let hasil5 = '';
while (angka5 <= batas5) {
    hasil5 += angka5 + '<br>';
    angka5++;
}
output5.innerHTML = hasil5;
const inputpercobaan = prompt('Masukkan jumlah percobaan maksimal:');
const maksimal = Number(inputpercobaan);
let percobaan = 1;
let hasil = '';
while (percobaan <= maksimal) {
    hasil += `percobaan ke-${percobaan}<br>`;
    percobaan++;
}
output.innerHTML = hasil;
const ouput6 = document.getElementById('output');
const inputBatas6 = prompt('Masukkan batas angka:');
const batas6 = Number(inputBatas6);
let hasilfor = '';
let hasilwhile = '';
//versi for
for (let i = 1; i <= batas6; i++) {
    hasilfor += i + '<br>';
}
//versi while
let angka6 = 1;
while (angka6 <= batas6) {
    hasilwhile += angka6 + '<br>';
    angka6++;
}
output.innerHTML = `<h3>Hasil perulangan for:</h3>${hasilfor}<h3>Hasil perulangan while:</h3>${hasilwhile}`;
