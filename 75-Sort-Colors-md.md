---
title: 75-Sort-Colors.md
categories: Leetcode
tags: Leetcode
comment: true
mathjax: false
date: 2021-04-15 21:33:06
---

## 问题描述

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
<!--more-->
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

 

Example 1:
```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Example 2:
```
Input: nums = [2,0,1]
Output: [0,1,2]
```

Example 3:
```
Input: nums = [0]
Output: [0]
```

Example 4:
```
Input: nums = [1]
Output: [1]
```

Constraints:
- n == nums.length
- 1 <= n <= 300
- nums[i] is 0, 1, or 2.
 

Follow up:
- Could you solve this problem without using the library's sort function?
- Could you come up with a one-pass algorithm using only O(1) constant space?

## 解题思路

- 分为0，1，2三种情况，0从memo的头部插入，1从memo尾部插入，同时都将这几个元素从nums中删除
- 最后将memo和nums组合起来即可


- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i = 0;
    var memo = [];
    
    while (i < nums.length) {
        switch(nums[i]) {
            case 0:
                memo.unshift(...nums.splice(i, 1));
                break;
            case 1:
                memo.push(...nums.splice(i, 1));
                break;
            default:
                i++;
                break;
        }
    }
    
    nums.unshift(...memo);
};

```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

