/*
https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

Example 1:
Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.

Example 2:
Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3
*/

/* O(n) */
function maxWidthOfVerticalArea(points) {
  points.sort((a, b) => {
    return a[0] - b[0];
  });

  let verticalWith = 0;

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] - points[i - 1][0] > verticalWith) {
      verticalWith = points[i][0] - points[i - 1][0];
    }
  }

  return verticalWith;
}
