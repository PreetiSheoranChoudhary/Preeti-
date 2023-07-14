
function range(start, end) {
	let tempArray = [];
	for (let i = start; i <= end; i++) {
		tempArray.push(i);
	}
	return tempArray;
}

function sum(arr) {
	let tempSum = 0;
	for (let num of arr) {
		tempSum = tempSum + num;
	}
	return tempSum;
}

const r = range(1, 20);
console.log(r);
const s = sum(r);
console.log(s);