---
title: 240-Search-a-2D-Matrix-II.md
categories: Leetcode
tags: Leetcode
comment: true
mathjax: false
date: 2021-06-01 10:10:05
---

## [问题描述](https://leetcode.com/problems/search-a-2d-matrix-ii/)

Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

![](https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg)
<!--more-->
```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
```
- m == matrix.length
- n == matrix[i].length
- 1 <= n, m <= 300
- -109 <= matix[i][j] <= 109
- All the integers in each row are sorted in ascending order.
- All the integers in each column are sorted in ascending order.
- -109 <= target <= 109

## 解题思路

- 行列均为增长的顺序，又是搜索target，逐行采用二分法。

- JavaScript

```JavaScript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {    
    for (var i = 0; i < matrix.length; i++) {
        var left = 0;
        var right = matrix[0].length - 1;

        while(left <= right) {
            var middle = Math.floor((left+right)/2);
            if (target == matrix[i][middle]) {
                return true;
            } else if (target < matrix[i][middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }
    return false;
};

```


- 时间复杂度：O(mlogn)
- 空间复杂度：O(1)

