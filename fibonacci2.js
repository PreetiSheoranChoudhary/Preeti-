let a = 0;
let b = 1;
let feb;

console.log(a);
console.log(b);
for (let i = 1; i <= 20; i++){
	feb = a + b;
	a = b;
	b = feb;
	console.log(feb);
}