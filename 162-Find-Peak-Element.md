---
title: 162-Find-Peak-Element
categories: Leetcode
tags: 
- Leetcode
- binary search
- javascript
comment: true
mathjax: false
date: 2020-11-24 22:11:28
---

## 问题描述

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.
<!--more-->
Example 1:
```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```
Example 2:
```
Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
```
Follow up: Your solution should be in logarithmic complexity.

## 解题思路

- 二分查找
- 思路是用二分法，因为题目要求时间复杂度是`log`级别。根据左右指针计算中间位置m，并比较`m`与`m+1`的值，如果`m`较大，则左侧存在峰值，`r = m`，如果 `m + 1` 较大，则右侧存在峰值，`l = m + 1`

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var n = nums.length;
    if (n == 1) return 0;
    var left = 0;
    var right = n - 1;
    
    if (nums[0] > nums[1]) return 0;
    if (nums[n - 1] > nums[n - 2]) return n - 1;
    
    
    while (left <= right) {
        var mid = Math.floor((left + right)/2);
        
        if (mid > 0 && mid < n-1 && nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (mid > 0 && nums[mid] > nums[mid - 1]) {
            // this means the middle point is in the up trend, focus on the right part
            left = mid;
        } else {
            right = mid;
        }
    }
    return nums[left] > nums[right] ? left : right;
};

```


- 时间复杂度：O(logn)
- 空间复杂度：O(1)

