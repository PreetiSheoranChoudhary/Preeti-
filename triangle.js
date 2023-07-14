triangle(4, 7, 8, 9);


function triangle(height) {
	for( let i = 1; i <= height; i++){
		for(let j = 1; j <= i;j++){
			process.stdout.write('*');
		}
		console.log('');
	}
}

