---
title: 53. Maximum Subarray
date: 2020-07-29 22:44:40
categories: Leetcode
tags: Leetcode
comment: true
mathjax: true
---

## 题目描述

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
```
<!--more-->
## 解题思路

- 目标是获取连续子数组的最大和；
- 进行累加的过程中，选择维护两个变量，累加和sum以及最大值max；
- 解题过程中，需要保持sum最大，max最大；
- 当前索引idx处，进行累加运算，此操作可能使sum变小，或者变大；
- sum变小情况下，需进行维护sum最大操作，sum最大值在sum与nums[idx]中产生；
- 即将sum与数组nums[i]值进行比较，使得sum总能保持累加的过程中最大，且可保证连续；
- 将sum与最大值max比较，取最大者，最后得到target值。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var max = -Number.MAX_VALUE;

    for (var i=0;i<nums.length;i++) {
        sum = sum + nums[i];
        sum = Math.max(sum, nums[i]);
        max = Math.max(sum, max);
    }
    return max;
};
```
时间复杂度：O(n)
空间复杂度：O(1)