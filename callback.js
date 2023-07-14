let ayyObj = [
{
	name: 'preeti',
	age: 18
},
{
	name: 'vinay',
	age: 25
},
{
	name: 'parth',
	age: 1
},
{
	name: 'Dalip',
	age: 47
},
];

function saprate (array) {
let name2 = [];
let age2 = [];
	for(const i of array){
		name2.push(i.name);
		age2.push(i.age);
	}
	return { name: name2, age: age2 };
}

function older(array){
	let age1 = 0;
	let olderName = '';
	for(const a of array){
        if(age1 < a.age){
        	age1 = a.age;
        	olderName = a.name;
        }	
	}
	return { name: olderName, age: age1 };	
}


console.log(saprate(ayyObj));
console.log(older(ayyObj));







// name = ['vinay', 'preeti', 'parth'];
// age = [25, 18, 1];
// which one is older - vinay