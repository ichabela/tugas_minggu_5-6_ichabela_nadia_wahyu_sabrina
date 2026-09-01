//perulangan angka 1 sampai N
const output1 = document.getElementById(`output`) as HTMLElement;
const input: string | null = prompt('Masukkan angka N:');
const N1: number = Number (input);
let hasil1: string = "";
for (let i: number = 1; i <= N1; i++) {
    hasil1 += i + `<br>`;
}
output1.innerHTML = hasil1;

//perulangan angka genap 2 sampai N
const output2 = document.getElementById(`output`) as HTMLElement;
const inputbatas2 : string | null = prompt('Masukkan batas atas:');
const batas2: number = Number(inputbatas2);
let hasilbatas2: string = '';
for (let i: number = 2; i <= batas2; i+=2) {
    hasilbatas2 += i + `<br>`;
}
output2.innerHTML = hasilbatas2;

//perulangan mundur dan "selamat tahun baru"
const output3 = document.getElementById(`output`) as HTMLElement;
const inputawal: string | null = prompt('Masukkan angka awal:');
const awal: number = Number(inputawal);
let hasil3: string = '';
for (let i: number = awal; i >= 1; i--) {   
    hasil3 += i + `<br>`;
}
hasil3 += "selamat tahun baru";
output3.innerHTML = hasil3;

//Tabel perkalian 1*N sampai 10*N
const output4 = document.getElementById(`output`) as HTMLElement;
const inputN: string | null = prompt('Masukkan angka :');
const N: number = Number(inputN);
let hasil4: string = '';
for (let i: number = 1; i <= 10; i++) {
    hasil4 += `${i} x ${N} = ${i * N}<br>`;
}
output4.innerHTML = hasil4;


