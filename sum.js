


function range ( start , end){
     let tempArr = [];
       for (let i = start;i <= end ; i++){
	tempArr.push(i);
}
return tempArr;
}
function sum ( array){
	tempSum = 0;

for (let num of array){
	tempSum = tempSum + num;
} 
return tempSum;
}

const r = range(1 , 34);
const s = sum(r);

console.log(s);