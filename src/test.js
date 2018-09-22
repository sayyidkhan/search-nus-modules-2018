// Immutability
const array = [1, 2, 3];
const array_copy = [...x];

const object = {
	'a': 1,
	'b': 2
};

const object_copy = {
	...x,
	'c': 3
};

// Classes
class TestClass {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	printName() {
		console.log("A girl has no name.");		
		console.log(this.x + this.y);
	}

	sum() {
		return this.x + this.y;
	}
}

class TestChildClass extends TestClass {
	constructor(x, y, name) {
		super(x, y);
		this.name = name;
	}

	printName() {
		console.log(`My name is ${this.name}`);		
		console.log(this.x + this.y);
	}
}

// In JS functions can be passed around
// Functions can retutrn functions
// Functions can take in functions
// We call these higher order functions
function a(x, f) {
	return function g() {
		return f(x);
	};
};

// Callbacks
setTimeout(x => {console.log(x)}, 2000, 1234);

// Promises
const promise = new Promise((resolve, reject) => {
	setTimeout(x => {
		return resolve(x);
	}, 2000, 1234);
});

promise.then(x => x * 3, x => console.log(x));

// Fetch
const modules = fetch("https://api.nusmods.com/2018-2019/moduleList.json")
			.then(response => response.json())
			.catch(error => console.log(error))