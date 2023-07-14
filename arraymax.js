let arr = [0, 1, 7, -1, -2, -3, -44];

function max (array){
let number = null;
	for (let i = 0; i < array.length ;i++){
		if (number === null) {
			number = array[i];
		}
		if (number < array[i]){
			number = array[i]
			
		}
	}
	return number;
}

function min (array) {
	let number2 = null;
	for (let i = 0; i < array.length; i++){
        if (number2 == null || number2 > array[i]) {
        	number2 = array[i];
        }
	}
	return number2;
}

 console.log(max(arr), min(arr));

exports.max = max;