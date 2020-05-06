/**
 * @param {number[]} arr
 * @return {boolean}
 */

/** Problem Statement (1207): Given an array of integers arr, write a function that returns true 
  * if and only if the number of occurrences of each value in the array is unique. */

/**Input1: arr = [1,2,2,1,1,3], 
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
 * No two values have the same number of occurrences. 
 * Additional Test Cases :
 * Input2 arr = [ -3, 0, 1, -3, 1, 1, 1, -3, 10, 0 ] => return true; 
 * Input3 arr = [1,2] => return false;
 * */
var uniqueOccurrences = function(arr) {
	arr = [ 1, 2 ];
	let objArr = {};
	for (let i = 0; i < arr.length; i++) {
		if ({}.hasOwnProperty.call(objArr, arr[i])) {
			objArr[arr[i]] = objArr[arr[i]] + 1;
		} else {
			objArr[arr[i]] = 1;
		}
	}
	console.log(objArr);
	let values = Object.values(objArr);
	console.log(values);
	let valuesLength = values.length;
	let valuesSet = new Set(values);
	console.log(valuesSet.size);
	if (valuesLength == valuesSet.size) {
		return true;
	}
	return false;
};

console.log(uniqueOccurrences());
