/* 
https://leetcode.com/problems/find-words-containing-character/description/

Example 1:
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

Example 2:
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

Example 3:
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
*/

function findWordsContaining(words, x) {
  const regex = new RegExp(x);
  const arr = [];

  for (let index = 0; index < words.length; index++) {
    if (regex.test(words[index])) {
      arr.push(index);
    }
  }

  return arr;
}

findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
