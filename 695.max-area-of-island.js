/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 *
 * https://leetcode.com/problems/max-area-of-island/description/
 *
 * algorithms
 * Medium (60.52%)
 * Likes:    1529
 * Dislikes: 69
 * Total Accepted:    125.8K
 * Total Submissions: 207.6K
 * Testcase Example:  '[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]'
 *
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's
 * (representing land) connected 4-directionally (horizontal or vertical.) You
 * may assume all four edges of the grid are surrounded by water.
 * 
 * Find the maximum area of an island in the given 2D array. (If there is no
 * island, the maximum area is 0.)
 * 
 * Example 1:
 * 
 * 
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 * ⁠[0,1,1,0,1,0,0,0,0,0,0,0,0],
 * ⁠[0,1,0,0,1,1,0,0,1,0,1,0,0],
 * ⁠[0,1,0,0,1,1,0,0,1,1,1,0,0],
 * ⁠[0,0,0,0,0,0,0,0,0,0,1,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * 
 * Given the above grid, return 6. Note the answer is not 11, because the
 * island must be connected 4-directionally.
 * 
 * Example 2:
 * 
 * 
 * [[0,0,0,0,0,0,0,0]]
 * Given the above grid, return 0.
 * 
 * Note: The length of each dimension in the given grid does not exceed 50.
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if((grid.reduce((a,b) => a+b))==0){return 0};
    
    var result = 0;
    
    for(var i=0;i<grid[0].length;i++){
        for(var j=0;j<grid.length;j++){
            var num = dfs(i,j);
            result = Math.max(result,num);
        }
    }
    
    return result;
    
    function dfs(i,j){
        if(i<0 || i>=grid[0].length) return 0;
        if(j<0 || j>=grid.length) return 0;
        if(grid[j][i] === 0) return 0;
        grid[j][i]=0;
        return dfs(i-1,j)+dfs(i+1,j)+dfs(i,j-1)+dfs(i,j+1)+1;
    }
};
// @lc code=end

