// SESI KAMIS PAGI, 3 des 2020 //

// function reverseMe(bilangan) {
//     // tulis code di sini...
    
    
//     var reverseMe = ''
//     for (var i = 0; i < bilangan.length; i++) {
//         reverseMe += bilangan[bilangan.length - i - 1]

//     }
//     return reverseMe
// }


// console.log(reverseMe('348 597')) // [ [7, 9, 5], [8, 4, 3]]
// console.log(reverseMe('12 345 6789'))
// /*
// [
// 	[9, 8, 7, 6],
// 	[5, 4, 3],
// 	[2, 1]
// ]

// */



function reverseMe(bilangan) {
    // tulis code di sini...
        
    let arrIn = []
    let arrOut = []

    for (let i = 0; i<=bilangan.length - 1; i-- ); {

        if (bilangan[i] === " " || !bilangan[i]){

        arrOut.push(arrIn)
        arrIn = []
        }
        else {
            arrIn.push(Number(bilangan[i]))
        }
    }

    return arrOut
    
}


console.log(reverseMe('348 597')) // [ [7, 9, 5], [8, 4, 3]]
console.log(reverseMe('12 345 6789'))
/*
[
	[9, 8, 7, 6],
	[5, 4, 3],
	[2, 1]
]

*/


