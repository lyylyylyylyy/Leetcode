---
title: 315-Count-of-Smaller-Numbers-After-Self
categories: Leetcode
tags: 
- Leetcode
- javascript
- binary search
comment: true
mathjax: false
date: 2020-11-29 19:57:38
---

## 问题描述

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 <!--more-->

Example 1:
```
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```

Constraints:

- 0 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

## 解题思路

- 新建一个数组arr，用于存放已经排过序的元素；
- 主要思路是利用二分查找进行排序，每个元素的索引即为比它小的个数。

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let arr = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let index = findIndex(arr, nums[i]);
        arr.splice(index, 0, nums[i]);
        nums[i] = index;
    }
    return nums;
};

function findIndex(arr, target) {
    if (arr === null || arr.length === 0) return 0;
    let left = 0;
    let right = arr.length-1;
    while (left + 1 < right) {
        let middle = Math.floor(left + (right-left)/2);
        if (arr[middle] >= target) {
            right = middle;
        } else {
            left = middle;
        }
    }
    if (target > arr[right]) {
        return right + 1;
    } else if (target <= arr[left]) {
        return left;
    } else {
        return right;
    }
}


```


- 时间复杂度：O(nlogn)
- 空间复杂度：O(n)

