let arr = [22, 21, 45, 17, 39, 11 ];

function min (array) {
	let number2 = null;
	for (let i = 0; i < array.length; i++){
        if (number2 == null || number2 > array[i]) {
        	number2 = array[i];
        }
	}
	return number2;
}

const minNumber = min(arr);
console.log(minNumber);

