/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 *
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/
 *
 * algorithms
 * Easy (45.27%)
 * Likes:    603
 * Dislikes: 108
 * Total Accepted:    92.2K
 * Total Submissions: 203.6K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 
 * Given an unsorted array of integers, find the length of longest continuous
 * increasing subsequence (subarray).
 * 
 * 
 * Example 1:
 * 
 * Input: [1,3,5,4,7]
 * Output: 3
 * Explanation: The longest continuous increasing subsequence is [1,3,5], its
 * length is 3. 
 * Even though [1,3,5,7] is also an increasing subsequence, it's not a
 * continuous one where 5 and 7 are separated by 4. 
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [2,2,2,2,2]
 * Output: 1
 * Explanation: The longest continuous increasing subsequence is [2], its
 * length is 1. 
 * 
 * 
 * 
 * Note:
 * Length of the array will not exceed 10,000.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length;
    var result = 0;
    var count = 1;
    
    for(var i=0;i<nums.length-1;i++){
        if (nums[i+1] > nums[i]){
            count = count+1;
        } else{
            result = Math.max(result,count);
            
            count = 1;
        }
        result = Math.max(result,count);
    }
    
    return result;
};
// @lc code=end

