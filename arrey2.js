const bob = [1, 2, 3];
const preeti = [ 3, 2, 1];
let bobscore = 0;
let preetiscore = 0;
for(let index = 0;index < bob.length; index++){
if(bob[index] > preeti[index]){
	bobscore++;
  }else if (preeti[index] > bob[index]){
	preetiscore++;
  }
}
console.log('preetiscore', preetiscore);
console.log('bobscore', bobscore);

if(bobscore > preetiscore){
	console.log(' bob wins the game ');
}else if ( preetiscore > bobscore){
	console.log('preeti wins the game')
}else{
	console.log('game is tie');
}


