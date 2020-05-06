/**
 * @param {number[]} arr
 * @return {boolean}
 */

/**
  * Problem Explanation (1346) : Given an array arr of integers, 
  * check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
  * 
  * Input: arr = [10,2,5,3]
  * Output: true
  * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
  * 
  * Additional test Cases :
  * Input: arr = [7,1,14,11] => true
  * Input: arr = [3,1,7,11] => false
  */
var checkIfExist = function(arr) {
	arr = [ 10, 2, 8, 3 ];
	let arrMap = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (arrMap.has(arr[i] * 2)) {
			return true;
		} else if (arrMap.has(arr[i] / 2)) {
			return true;
		}
		arrMap.set(arr[i], i);
	}
	console.log(arrMap);
	console.log(arrMap.get(2));
	return false;
};

console.log(checkIfExist());
