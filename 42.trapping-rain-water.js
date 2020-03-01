/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (46.85%)
 * Likes:    5700
 * Dislikes: 105
 * Total Accepted:    434K
 * Total Submissions: 926.1K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    while (left < right) {
        if (height[left] > leftMax) {
            leftMax = height[left];
        }
        if (leftMax > height[left]) {
            result += (leftMax - height[left]);
        }
        if (height[right] > rightMax) {
            rightMax = height[right];
        }
        if (rightMax > height[right]) {
            result += (rightMax - height[right]);
        }
        height[left] < height[right] ? left++ : right--
    }
    return result;
};
// @lc code=end

