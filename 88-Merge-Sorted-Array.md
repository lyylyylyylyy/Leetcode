---
title: 88-Merge-Sorted-Array
categories: Leetcode
tags: 
- Leetcode
- array
- javascript
- two pointers
comment: true
mathjax: false
date: 2020-11-12 22:00:50
---

## 问题描述

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
<!--more-->
Note:

- The number of elements initialized in nums1 and nums2 are m and n respectively.
- You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

Example:
```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
``` 

Constraints:

- -10^9 <= nums1[i], nums2[i] <= 10^9
- nums1.length == m + n
- nums2.length == n


## 解题思路

- 从两个数组后面遍历，将nums2的数值与nums1比较，填入nums1数组的空白位置。

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let index = m + n - 1
    
    while (p1 >= 0 || p2 >= 0) {
        const val1 = p1 >= 0 ? nums1[p1] : Number.MIN_SAFE_INTEGER;
        const val2 = p2 >= 0 ? nums2[p2] : Number.MIN_SAFE_INTEGER;
        
        if (val1 > val2) {
            nums1[index--] = val1;
            p1--;
        } else {
            nums1[index--] = val2;
            p2--;
        }
    }
};

```



- 时间复杂度：O(n)
- 空间复杂度：O(1)

