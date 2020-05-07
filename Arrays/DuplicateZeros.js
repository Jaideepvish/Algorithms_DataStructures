/**
 * Problem Explanation (1089) : Given a fixed length array arr of integers, duplicate each occurrence of zero, 
 * shifting the remaining elements to the right.Note that elements beyond the length of the original array 
 * are not written.Do the above modifications to the input array in place, do not return anything from your function.
 * 
 * Example 1: Input: [1,0,2,3,0,4,5,0]
 * Output: null 
 * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 * 
 * Example 2:
 * Input: [1,2,3]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,2,3]
 * 
 * 
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	arr = [ 1, 0, 2, 3, 0, 4, 5, 0 ];
	let arrLength = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			while (arrLength > i) {
				arr[arrLength] = arr[arrLength - 1];
				arrLength--;
			}
			i = i + 1;
		}
		arrLength = arr.length - 1;
	}

	console.log(arr);
};

duplicateZeros();

/* Can be achieved same thing by using Array splice method in o(n) time*/
