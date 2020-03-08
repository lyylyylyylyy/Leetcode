/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (43.83%)
 * Likes:    2657
 * Dislikes: 152
 * Total Accepted:    265.4K
 * Total Submissions: 604.5K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 * 
 * Your algorithm should run in O(n) complexity.
 * 
 * Example:
 * 
 * 
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length===0) return 0;
    
    var longest = 0;
    var count = 0;
    var map = new Map();
    
    for(var i=0;i<nums.length;i++){
        if (!map.has(nums[i])){
            map.set(nums[i],true);
        }
    }
    
    for(var idx=0;idx<nums.length;idx++){
        if (map.has(nums[idx])){
            count = 1;
            // console.log(count);
            map.delete(nums[idx]);
        }
        
        var low = nums[idx]-1;
        while(map.has(low)){
            count++;
            map.delete(low);
            low--;
        }
        
        var high = nums[idx]+1;
        while(map.has(high)){
            count++;
            map.delete(high);
            high++;
        }
        
        longest = Math.max(longest,count);
    }
    return longest;
};
// @lc code=end

