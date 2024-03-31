/* 
https://leetcode.com/problems/concatenation-of-array/description/

Example 1:
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/

/* O(n) */
function getConcatenation(nums) {
  return [...nums, ...nums];
}

/* O(n) */
// function getConcatenation(nums) {
//   return nums.concat(nums);
// }

const test = getConcatenation([1, 2, 3]);

console.log(test);
