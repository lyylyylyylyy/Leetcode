---
title: 81-Search-in-Rotated-Sorted-Array-II
categories: Leetcode
tags: 
- Leetcode
- javascript
- binary search
comment: true
mathjax: false
date: 2020-11-20 16:34:59
---

## 问题描述

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

`(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).`

You are given a target value to search. If found in the array return true, otherwise return false.
<!--more-->
Example 1:
```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```
Example 2:
```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```
Follow up:

- This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
- Would this affect the run-time complexity? How and why?

## 解题思路

- 遍历数组，找到旋转点；
- 根据旋转点，确认target的范围所在；
- 在target所在范围内进行二分查找。

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length == 0) return false;
    if (nums.length == 1) {
        if (nums[0] == target) return true;
        return false;
    }
    var idx = 0;
    for(var i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            idx = i;
            break;
        }
    }
    
    var left = 0;
    var right = nums.length-1;
    if (nums[left] == target || nums[right] == target) return true;
    if (target > nums[right]) {
        right = idx;
    }
    if (target < nums[left]) {
        left = idx;
    }
    
    while (left <= right) {
        if (nums[left] == target || nums[right] == target) return true;
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) return true;
        if (target > nums[mid]) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return false;
};

```



- 时间复杂度：O()
- 空间复杂度：O()

