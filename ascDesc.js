const arr = [1, 0, 7, 3, -1, 2, 6, 4, 9, 10];

function asc(array) {
	let tempArray = [];
	for (let a of array) {
		if (tempArray.length == 0) {
			tempArray.push(a);
		} else {
			let lower = false;
			for (let t = 0; t < tempArray.length; t++) {
				if (tempArray[t] > a) {
					tempArray.splice(t, 0, a);
					lower = true;
					break;
				}
			}
			if (!lower) {
				tempArray.push(a);
			}
		}
	}
	return tempArray;
}
console.log(asc(arr));