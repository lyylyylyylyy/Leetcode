/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (24.04%)
 * Likes:    1599
 * Dislikes: 92
 * Total Accepted:    221.5K
 * Total Submissions: 920.7K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 * 
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == null || p == null) {
        return false;
    }
    let lens = s.length + 1, lenp = p.length + 1;
    // use Array(n) to create array with size n
    // use Array.fill(v) to fill it with values and make it iterable
    // NOTE: if the value passed to Array.fill is a object, it won't get copied
    // but only its reference get copied
    let dp = Array(lens).fill(null).map(c => Array(lenp).fill(false));
    // start the nested for-loop
    for (let i = 0; i < lens; i++) {
        for (let j = 0; j < lenp; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
                continue;
            }
            if (j === 0) {
                dp[i][j] = false;
                continue;
            }
            // case: if current char of s and p are the same or if current char
            // of p is the '?'
            if (p[j-1] !== '*') {
                if (i > 0 && (s[i-1] === p[j-1] || p[j-1] === '?')) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
            // case when current char of p is '*'
            else {
                // for case '*' match 0 character of s
                dp[i][j] |= dp[i][j-1];
                // for case '*' match 1 or n characters
                if (i > 0) {
                    dp[i][j] |= dp[i-1][j];
                }
                // convert back to boolean
                dp[i][j] = !!dp[i][j];
            }
        }
    }
    return dp[lens-1][lenp-1];
};
// @lc code=end

