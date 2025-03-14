Array.prototype.myMap = function (callback) {
	// Write your code here.
	output = [];
	for (let i = 0; i < this.length; i++) {
		output.push(callback(this[i], i, this));
	}
	return output;
};

Array.prototype.myFilter = function (callback) {
	// Write your code here.
	const output = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this) === true) {
			output.push(this[i]);
		}
	}
	return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
	// Write your code here.
	let accumulator = initialValue;
	for (let i = 0; i < this.length; i++) {
		if (i === 0 && initialValue === undefined) {
			accumulator = this[i];
		} else {
			accumulator = callback(accumulator, this[i], i, this);
		}
	}
	return accumulator;
};
