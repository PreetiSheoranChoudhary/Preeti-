function every(array, test) {
	let allTrue = true;
	for (const arr of array) {
		if (!test(arr)) {
			allTrue = false;
		}
	}
	return allTrue;
}

function any(array, test) {
	let anyTrue = false;
	for (const arr of array) {
		if (test(arr) ){
			anyTrue = true;
			break;
		}
	}
	return anyTrue;
}


// console.log(every([1, 3, 5, 16 , 22 , 23], n => n < 20));
console.log(any([10, 11, 15, 18, 1, 3, 5, 20, 22], n => n < 10));