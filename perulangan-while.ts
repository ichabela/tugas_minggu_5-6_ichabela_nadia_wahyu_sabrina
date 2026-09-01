const output5= document.getElementById('output') as HTMLDivElement;
const inputBatas5: string | null = prompt('Masukkan batas:');
const batas5: number = Number(inputBatas5);
let angka5: number = 1;
let hasil5: string = '';

while (angka5 <= batas5) {
    hasil5 += angka5 + '<br>';
    angka5++;
}
output5.innerHTML = hasil5;

const inputpercobaan: string | null = prompt('Masukkan jumlah percobaan maksimal:');
const maksimal: number = Number(inputpercobaan);
let percobaan: number = 1;
let hasil: string = '';
while (percobaan <= maksimal) {
    hasil += `percobaan ke-${percobaan}<br>`;
    percobaan++;
}
output.innerHTML = hasil;


const ouput6 = document.getElementById('output') as HTMLDivElement;
const inputBatas6: string | null = prompt('Masukkan batas angka:');
const batas6: number = Number(inputBatas6);
let hasilfor: string = '';
let hasilwhile: string = '';

//versi for
for (let i: number = 1; i <= batas6; i++) {
    hasilfor += i + '<br>';
}
//versi while
let angka6: number = 1;
while (angka6 <= batas6) {
    hasilwhile += angka6 + '<br>';
    angka6++;
}   
output.innerHTML = `<h3>Hasil perulangan for:</h3>${hasilfor}<h3>Hasil perulangan while:</h3>${hasilwhile}`;
    