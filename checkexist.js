const array =  [ 1, 2, 3, 5, 7, 8, 9, 10, 12, 15, 8, 18, 20];
const checkThis = 8;
 function checkExist (array2 ,number){
 	let exist  = false;
 	let num = 0;
 	 for(const a of array2) {
 	 	if (a === number) {
 	 		exist = true;
 	 		num++;
 	 	}
 	 }
 	 return [exist, num];
 }

console.log(checkExist(array, checkThis));