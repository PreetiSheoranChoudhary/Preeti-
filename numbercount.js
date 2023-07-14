let num = 1234;

function numberCount (number) {
	let count = 1;
	for (let i = 10;i > 0; i = i * 10) {
		if (i != undefined) {
			if ((i - number) > 0) {
				return count;
			} else if ((i - number) == 0) {
				count++;
				return count;
			}
		}
		count++;
	}

}
const totalNumber = numberCount(num);``
console.log(totalNumber);