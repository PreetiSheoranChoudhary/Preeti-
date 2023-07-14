let array=[1,2,3,4,5,6,7,8,9,10,11];
let rangeA = 3;
let rangeB = 5;
function remove (arr, A , B){
	let tempArr= [];
		for (var i = 0; i <= arr.length ; i++) {
			if(arr[i] < B && arr[i] > A){
                tempArr.push(arr[i]);
			}
			}
return tempArr;
}
 const split = remove(array ,rangeA ,rangeB);
 console.log(split);













