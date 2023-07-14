const uniqueArray = unique([1, 6, 5, 3, 1, 6, 3, 8, 5]);
 
 function unique (array){
    let arr = [];
 	for (let i = 0; i < array.length; i++){
 		if(!arr.includes(array[i])){
 			arr.push (array[i]);
 		}
 	}
 	return arr;
 }
 console.log(uniqueArray);