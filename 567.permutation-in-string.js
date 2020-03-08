/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 *
 * https://leetcode.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (40.13%)
 * Likes:    1025
 * Dislikes: 52
 * Total Accepted:    77.8K
 * Total Submissions: 193.8K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * Given two strings s1 and s2, write a function to return true if s2 contains
 * the permutation of s1. In other words, one of the first string's
 * permutations is the substring of the second string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True
 * Explanation: s2 contains one permutation of s1 ("ba").
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    let isFound = false;
    const aLength = s1.length;
    const bLength = s2.length;
    
    // create two empty arrays with 0 inside
    const aWindow = new Array(26).fill(0);
    const bWindow = new Array(26).fill(0);

    [...s1].forEach(character => {
        aWindow[character.charCodeAt(0)-97]++
    });
    
    [...s2].forEach((character, index) => {
        //jump into next position, and minus the previous chart from window
        if (index >= aLength) bWindow[s2.charCodeAt(index-aLength)-97]--
        bWindow[character.charCodeAt(0)-97]++
        // compare two strings
        if (aWindow.join()===bWindow.join()) isFound=true;
    });

    return isFound;
};
// @lc code=end

