let arrays = [[1, 2, 3], [4, 5], [6], [7, 8]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]



function array(combine){
	let temparr = [];
	for(let i = 0 ; i < combine.length; i++){
		// temparr.push(...i);
		for(let a = 0 ; a < combine[i].length; a++) {
			temparr.push(combine[i][a]);
           
		}
	}


	/*
		for (const first of combine) {
			for (const second of first) {
				temparr.push(second);
			}
		}
	*/
	return temparr;
}
console.log(array(arrays));