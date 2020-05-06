/**
 * @param {number[]} nums
 * @return {number}
 */

/**'
  * Problem Explanation : Given an array of size n, find the majority element.
  * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
  * You may assume that the array is non-empty and the majority element always exist in the array.
  * 
  * Example 1: 
  * Input: [3,2,3]
  * Output: 3
  * 
  * Additional Test Cases : 
  * Example 2: 
  * Input: [2,2,1,1,1,2,2]
  * Output: 2
  */
var majorityElement = function(nums) {
	nums = [ 2, 2, 1, 1, 1, 2, 2 ];
	let obj = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (obj.has(nums[i])) {
			obj.set(nums[i], obj.get(nums[i]) + 1);
		} else {
			obj.set(nums[i], 1);
		}
	}

	let majorityValue = 0;
	let majorityElement = 0;
	for (let [ key, value ] of obj) {
		if (value > majorityValue) {
			majorityValue = value;
			majorityElement = key;
		}
	}

	console.log(majorityElement);
};

majorityElement();
