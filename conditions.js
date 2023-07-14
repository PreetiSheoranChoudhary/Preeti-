
let monthely = 80000;
let yearly = monthely * 12;
let tax = 0;

if(yearly <= 250000){
	tax = 0;
}else if(yearly > 250000 && yearly < 500000){
	tax = 5;
}else if(yearly > 500000 && yearly < 1000000){
	tax = 10;
}else if(yearly > 1000000 && yearly <2000000){
	tax = 20;
}else{
	tax = 30;
}
let taxedvalue = tax * yearly  / 100;
console.log('your salary is' + yearly + ' so you have to pay' + tax + ' % tax. so the total ' +
	' tax you have to pay is ' + taxedvalue + ' rs' );












