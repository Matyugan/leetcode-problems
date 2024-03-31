/* 
https://leetcode.com/problems/number-of-good-pairs/

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
*/

/* O(n*2) */
// const numIdenticalPairs = function (nums) {
//   let pairs = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         pairs++;
//       }
//     }
//   }

//   return pairs;
// };

/* O(n) */
function numIdenticalPairs(nums) {
  let goodPair = 0;
  let map = {};

  for (let num of nums) {
    if (map[num]) {
      goodPair += map[num];
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }

  return goodPair;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
