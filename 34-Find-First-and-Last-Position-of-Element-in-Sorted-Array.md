---
title: 34-Find-First-and-Last-Position-of-Element-in-Sorted-Array
categories: Leetcode
tags: 
- Leetcode
- binary search
comment: true
mathjax: false
date: 2021-06-22 20:26:31
---

## 问题描述

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
<!--more-->
 

Example 1:
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```
Example 2:
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

Example 3:
```
Input: nums = [], target = 0
Output: [-1,-1]
```

## 解题思路

- 二分查找，找到后以mid为中心找边界

```JavaScript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    if (nums.length == 0) return result;
    
    var i = 0;
    var j = nums.length - 1;
    
    while (i <= j) {
        var mid = Math.floor((i + j) / 2);
        if (nums[mid] == target) {
            var left = mid-1;
            var right = mid + 1;
            
            while (left >= i || right <= j) {
                if (nums[left] == target) left--;
                if (nums[right] == target) right++;
                if (nums[left] !== target && nums[right] !== target) break;
            }
            result[0] = left+1;
            result[1] = right-1;
            return result;
        } else if (nums[mid] < target) {
            i = mid + 1;
        } else if (nums[mid] > target) {
            j = mid - 1;
        }
    }
    
    return result;
};
```



- 时间复杂度：O(1)
- 空间复杂度：O(logn)

