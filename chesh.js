let chessBoard = '';
let size = 8;
for ( let lineCounter  = 1 ;lineCounter <= size ; lineCounter++) { 
	for(let cherCounter = 1 ; cherCounter <= size; cherCounter++) {
		if (lineCounter % 2 == 0) {
			if (cherCounter % 2 == 0) {
				process.stdout.write('⬛ ');
			} else {
				process.stdout.write('⬚ ');
			}
		} else {
			if (cherCounter % 2 == 0) {
				process.stdout.write('⬚ ');
			} else {
				process.stdout.write('⬛ ');
			}
		}
	}
	console.log('');
}

/*

0 0 0
0 0 0
0 0 0

1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1


1 2 3 4
4 5 6 5
7 8 9 7
1 5 6 7

*/