class Measure {
	constructor (side) {
		this.side = side;
	}

	area() {
		return this.side * this.side;
	}

	get showSide () {
		return this.side;
	}

	set multiple (a) {
		this.side = a;
	}
}

const m = new Measure(5);

m.area();
m.multiple = 20;
console.log(m.showSide);

let obj = {
	a: 24 ,
	area: function() {
		
	}
}
