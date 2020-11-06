---
title: 209-Minimum-Size-Subarray-Sum
categories: Leetcode
tags: 
- Leetcode
- javascript
- array
- sliding window
comment: true
mathjax: false
date: 2020-11-06 22:55:07
---

## 问题描述

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
<!--more-->

Example: 
```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```
Follow up:
- If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

## 解题思路

- 滑动窗口方法

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let sum = 0;
    let minLength = Infinity;
    let prevIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while (sum >= s) {
            minLength = Math.min(minLength, i - prevIndex + 1);
            sum -= nums[prevIndex];
            prevIndex++;
        }
    }
    
    
    return minLength === Infinity ? 0 : minLength;
};

```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

