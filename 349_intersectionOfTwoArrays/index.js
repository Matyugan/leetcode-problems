/*
https://leetcode.com/problems/intersection-of-two-arrays/

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

/* O(n^2) */
function intersection(nums1, nums2) {
  return [...new Set(nums1.filter((item) => nums2.includes(item)))];
}

/* O(n) */
function intersectionSec(nums1, nums2) {
  const collection1 = new Set(nums1);
  const collection2 = new Set(nums2);

  const resultArr = [];

  for (const num of collection1) {
    if (collection2.has(num)) resultArr.push(num);
  }

  return resultArr;
}

