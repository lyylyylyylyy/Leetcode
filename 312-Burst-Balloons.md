---
title: 312-Burst-Balloons
date: 2021-01-06 21:43:50
tags: 
- javascript
- dp
---

## 问题描述

You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get `nums[left] * nums[i] * nums[right]` coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.
<!--more-->
Return the maximum coins you can collect by bursting the balloons wisely.

 

Example 1:
```
Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

Example 2:
```
Input: nums = [1,5]
Output: 10
```

Constraints:

- n == nums.length
- 1 <= n <= 500
- 0 <= nums[i] <= 100


## 解题思路

[参考花花酱](https://www.youtube.com/watch?v=z3hu2Be92UA)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    var n = nums.length;
    
    nums.push(1);
    nums.unshift(1);
    
    nums = [1, ...nums, 1];
    
    
    // dp[i][j] = maxCoins(nums[i:j+1]);
    const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));
    
    for (var len = 1; len <= n; len++) {
        for (var i = 1; i <= n-len+1; i++) {
            var j = i + len -1;
            for (var k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1]+dp[k+1][j]);
            }
        }
    }
    console.log(dp)
    return dp[1][n];
};
```

- 时间复杂度：O(n^3)
- 空间复杂度：O(n^2)
