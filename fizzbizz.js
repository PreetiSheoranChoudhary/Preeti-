fizzbizz(12);


function fizzbizz(aaa){
	for(let a = 1; a <= aaa; a++) {
		 if (a % 3 == 0 && a % 5 == 0){
			console.log( 'fuzzbuzz ', a)
		} else if(a % 3 == 0){
		 	console.log( 'fuzz', a );  
		 } else if( a % 5 == 0){
			console.log( 'buzz', a);
		 } 
		console.log('');
	} 
}