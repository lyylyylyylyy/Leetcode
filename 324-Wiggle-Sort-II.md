---
title: 324-Wiggle-Sort-II
categories: Leetcode
tags: 
- Leetcode
- javascript
- sort
comment: true
mathjax: false
date: 2020-11-19 19:49:42
---

## 问题描述

Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:
```
Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].
```
<!--more-->
Example 2:
```
Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].
Note:
You may assume all input has valid answer.
```
Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?


## 解题思路

[解题思路](https://leetcode.com/problems/wiggle-sort-ii/discuss/77682/Step-by-step-explanation-of-index-mapping-in-Java)

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    if (nums.length < 2) return nums;
    
    nums.sort((a,b) => {
        return a-b;
    });
    
    var median = nums.length%2 == 0 ? (nums[nums.length/2]+nums[nums.length/2-1])/2 : nums[Math.floor(nums.length/2)];
    
    var n = nums.length;
    var left = 0, i = 0, right = n - 1;
    
    while (i <= right) {
        if (nums[newIndex(i,n)] > median) {
            swap(nums, newIndex(left++,n), newIndex(i++,n));
        }
        else if (nums[newIndex(i,n)] < median) {
            swap(nums, newIndex(right--,n), newIndex(i,n));
        }
        else {
            i++;
        }
    }
    return nums;
    
    function newIndex(index, n) {
        console.log(n|1)
        return (1 + 2*index) % (n | 1);
    }
    function swap(list, left, right){
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
    }
};
```


- 时间复杂度：O(nlogn)
- 空间复杂度：O(1)

