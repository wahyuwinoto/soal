// SESI KAMIS PAGI, 3 des 2020 //

/*
 * Buatlah function getBoardNumbers yang menerima 1 parameter berupa number, function akan mengembalikan array multidimensi sesuai berikut
 * contoh: console.log(getBoardNumbers(3))
 * [
 *    [1, 2, 3],
 *    [4, 5, 6],
 *    [7, 8, 9]
 * ]
 * contoh: console.log(getBoardNumbers(4))
 * [
 *    [1, 2, 3, 4],
 *    [5, 6, 7, 8],
 *    [9, 10, 11, 12],
 *    [13, 14, 15, 16]
 * ]
 */



function getBoardNumbers(numbers){

        let outerArray = [];
        let count = 0;

    for (let i=0; i<numbers; i++){
        let innerArray= []
    
        for (let j=0; j<numbers; j++){
        count++
        innerArray.push(count);
}
outerArray.push(innerArray);
    }
        return outerArray
    }

    console.log(getBoardNumbers(4))
