// SESI KAMIS PAGI, 3 des 2020 //

// * =================
//  * Simple Calculator
//  * =================
//  *
//  * Buatlah sebuah fungsi kalkulator yang menerima dua paramter 
//  * berupa angka dan satu parameter berupa operator
//  *
//  * Operator yang akan kita lakukan adalah
//  * + -> penjumlahan angka tersebut
//  * - -> pengurangan angka tersebut
//  * * -> perkalian angka tersebut
//  * / -> pembagian angka tersebut
//  * % -> moduls angka tersebut
//  */

// Buat fungsi dan code di sini...

// Silakan panggil fungsi dengan test cases sesuai keinginan


// let angka1 = 10;
// let angka2 = 20;

// function kalkulator(angka, operasi){
    
//     return angka1 + angka2
    
// }

// console.log(kalkulator([10,3,1,9,0,0], '+'))



function kalkulator(angka, operator){

let hasil = angka[0]

for (let i=1; i=angka.length; i++){

if(operator === "+"){
    hasil += angka[i]
}
else if (operator === "-"){
    hasil -= angka[i]
}
else if (operator === "*"){
    hasil *= angka[i]
}
else if (operator === "/"){
    hasil /= angka[i]
}
else if (operator === "%"){
    hasil %= angka[i]
}
else if (!operator){
    return "invalid operator"
}

return hasil
}
}
console.log(kalkulator([10,3,1,9,0,0], '-'))
