"use strict";
//perulangan angka 1 sampai N
const output1 = document.getElementById(`output`);
const input = prompt('Masukkan angka N:');
const N1 = Number(input);
let hasil1 = "";
for (let i = 1; i <= N1; i++) {
    hasil1 += i + `<br>`;
}
output1.innerHTML = hasil1;
//perulangan angka genap 2 sampai N
const output2 = document.getElementById(`output`);
const inputbatas2 = prompt('Masukkan batas atas:');
const batas2 = Number(inputbatas2);
let hasilbatas2 = '';
for (let i = 2; i <= batas2; i += 2) {
    hasilbatas2 += i + `<br>`;
}
output2.innerHTML = hasilbatas2;
//perulangan mundur dan "selamat tahun baru"
const output3 = document.getElementById(`output`);
const inputawal = prompt('Masukkan angka awal:');
const awal = Number(inputawal);
let hasil3 = '';
for (let i = awal; i >= 1; i--) {
    hasil3 += i + `<br>`;
}
hasil3 += "selamat tahun baru";
output3.innerHTML = hasil3;
//Tabel perkalian 1*N sampai 10*N
const output4 = document.getElementById(`output`);
const inputN = prompt('Masukkan angka :');
const N = Number(inputN);
let hasil4 = '';
for (let i = 1; i <= 10; i++) {
    hasil4 += `${i} x ${N} = ${i * N}<br>`;
}
output4.innerHTML = hasil4;
