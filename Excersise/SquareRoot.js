/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let closestResult = x;
	let randomNumber = 1;
	let precision = 0.000001;

	while (closestResult - randomNumber > precision) {
		closestResult = (closestResult + x / closestResult) / 2;
		randomNumber = x / closestResult;
	}

	return closestResult;
};

console.log(mySqrt(4));
