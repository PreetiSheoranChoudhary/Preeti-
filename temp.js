function multiplier(factor) {
  return function (number) {
  	return factor * number;
  };
}


const twice = multiplier(2);
const triple = multiplier(3);




console.log(triple(10), twice(10));