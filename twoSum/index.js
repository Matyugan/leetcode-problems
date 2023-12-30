/*
Problem: https://leetcode.com/problems/two-sum/

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

// O(n^2)
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

// O(n)
const twoSumSec = (arr, target) => {
  const list = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]

		if(list.has(diff)) {
			return [list.get(diff), i]
		}

		list.set(arr[i], i)
  }
};
