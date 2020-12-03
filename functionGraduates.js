// SESI KAMIS PAGI, 3 des 2020 //


function graduatesCount(scores, minimumGrade) {
	// tulis code di sini...

let Lulus = 0;
let TidakLulus = 0

if(scores.length === 0){
	return "data kosong"
}
else if (!minimumGrade){
	return "Masukkan minimum grade"
}

else {
for (let i = 0; i<scores.length; i++){
	if (scores >= minimumGrade){
		Lulus += 1
	} else{
		TidakLulus += 1
	}
	}
}

if (Lulus === scores.length){
	return "Semua Orang Lulus"
}
else if (Lulus === 0){
	return "Tidak ada yang lulus"
}
else{
return `${Lulus} orang lulus`
}
}


console.log(graduatesCount([80, 79, 60, 72, 73], 72)); // 4 orang lulus
console.log(graduatesCount([80, 79, 60, 72, 73], 78)); // 2 orang lulus
console.log(graduatesCount([40, 70, 60, 72], 75)); // Tidak ada yang lulus
console.log(graduatesCount([80, 79, 72, 73], 60)); // Semua orang lulus
console.log(graduatesCount([79, 60, 72, 73])); // Masukkan minimum grade!
console.log(graduatesCount([], 72)); // Data kosong

