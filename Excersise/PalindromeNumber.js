/**
 * @param {number} x
 * @return {boolean}
 */

/**
  * Problem Explanation (9) : Determine whether an integer is a palindrome. 
  * An integer is a palindrome when it reads the same backward as forward.
  * Example 1:
  * Input: 121
  * Output: true 
  * 
  * Addional Test Cases :
  * Example 2: Input: -121
  * Output: false
  * Explanation: From left to right, it reads -121. 
  * From right to left, it becomes 121-. Therefore it is not a palindrome.
  * 
  * Example 3:
  * Input: 10
  * Output: false 
  * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
  */
var isPalindrome = function(x) {
	x = 121 + '';
	let reverseString = '';
	for (let i = x.length - 1; i >= 0; i--) {
		reverseString += x[i];
	}
	return x === reverseString;
	//return x == x.toString().split('').reverse().join('');
	//console.log(x.toString().split('').reverse().join(''));
};

console.log(isPalindrome());
