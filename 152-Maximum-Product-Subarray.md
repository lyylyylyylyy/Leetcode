---
title: 152-Maximum-Product-Subarray
categories: Leetcode
tags: 
- Leetcode
- array
- dynamic planning
comment: true
mathjax: false
date: 2020-11-09 22:38:36
---

## 问题描述

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
```
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```
<!--more-->
Example 2:
```
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

## 解题思路

- 初始状态
```
    max_dp[0] = nums[0];
    min_dp[0] = nums[0];
```
- 由于可能存在负数，所以有三个数参与判断，状态转移方程：
```
max_dp[i] = Math.max(nums[i], Math.max(max_dp[i-1]*nums[i], min_dp[i-1]*nums[i]));
min_dp[i] = Math.min(nums[i], Math.min(max_dp[i-1]*nums[i], min_dp[i-1]*nums[i]));
```
- result 更新最大值


- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length == 1) return nums[0];
    
    var max_dp = new Array(nums.length);
    var min_dp = new Array(nums.length);
    var result = nums[0];
    
    max_dp[0] = nums[0];
    min_dp[0] = nums[0];
    
    for (var i=1;i<nums.length;i++) {
        max_dp[i] = Math.max(nums[i], Math.max(max_dp[i-1]*nums[i], min_dp[i-1]*nums[i]));
        min_dp[i] = Math.min(nums[i], Math.min(max_dp[i-1]*nums[i], min_dp[i-1]*nums[i]));
        
        if (max_dp[i] > result) {
            result = max_dp[i];
        }
    }
    console.log(max_dp);
    console.log(min_dp);
    return result;
};

```



- 时间复杂度：O(n)
- 空间复杂度：O(n)

