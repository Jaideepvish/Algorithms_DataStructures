/**
 * @param {number[]} nums
 * @return {number}
 */

/**
  * Problem Explanation (26) : 
  * Given a sorted array nums, 
  * remove the duplicates in-place such that each element appear only once and return the new length.
  * Do not allocate extra space for another array, you must do this by modifying the input array 
  * in-place with O(1) extra memory. 
  * 
  * Example 1: 
  * Given nums = [1,1,2],
  * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
  * It doesn't matter what you leave beyond the returned length.
  * 
  * Additional Test Cases :
  * Example 2: 
  * Given nums = [0,0,1,1,1,2,2,3,3,4],
  * Your function should return length = 5, with the first five elements of nums 
  * being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
  * 
  */
var removeDuplicates = function(nums) {
	nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
	let slowPointer = 0;
	let lengthOfGivenArray = nums.length;

	for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
		if (nums[slowPointer] === nums[fastPointer]) {
			lengthOfGivenArray--;
		} else {
			slowPointer++;
			nums[slowPointer] = nums[fastPointer];
			console.log(nums);
		}
	}

	return lengthOfGivenArray;
};

console.log(removeDuplicates());