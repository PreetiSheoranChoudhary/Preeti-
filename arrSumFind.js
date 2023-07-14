


const array = [1, 2, 4, 5, 7, 6, 8, 9]; 
// 12 - true
const number = 10;
function arrSumFind(arr , test){
	let arrSum = false;
	for (let i = 0 ; i <= arr.length; i++) {
		for(let a = i+1 ; a <= arr.length; a++){
			if (arr[i] + arr[a] == test){
				arrSum = true;
				break;
		    }
		}
		if (arrSum){
			break;
		}
	}
	return arrSum;
}
console.log(arrSumFind(array , number));