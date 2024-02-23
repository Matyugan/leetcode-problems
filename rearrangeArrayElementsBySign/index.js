/* 
https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

Example 1:
Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions. 

Example 2:
Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
*/

function rearrangeArray(nums) {
  const positiveNums = [];
  const negativeNums = [];

  for (let index = 0; index < nums.length; index++) {
    if (Math.sign(nums[index]) === 1) {
      positiveNums.push(nums[index]);
    } else {
      negativeNums.push(nums[index]);
    }
  }

  return positiveNums.reduce((arr, item, index) => {
    arr.push(item, negativeNums[index]);

    return arr;
  }, []);
}
