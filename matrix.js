let matrix = '';
let size = 5;
for (let m = 1;m <= size ;m++){
   for (let n = 1; n<= size ;n++ ){
   	if (m == n){
   		process.stdout.write('1 '); 
   	
        }else{
   		  process.stdout.write('0 ')
   	    }
   }console.log('');
}












   	/*{
   	

   	if ( m > 1 && n > 1){
   		process.stdout.write('0 '); 
   	}else {
   		process.stdout.write('1 ')
   	
   	}
  } 
console.log('');
}*/