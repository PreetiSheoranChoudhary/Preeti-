const length = 10;
function fillArray(l) {
    let array = [];
	for (let index = 0;index < l; index++){
      array.push('');
	}
	return array;
}
console.log(fillArray(length));
