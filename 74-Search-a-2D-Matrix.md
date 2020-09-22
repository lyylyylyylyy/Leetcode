---
title: 74-Search-a-2D-Matrix
date: 2020-09-15 23:04:56
categories: Leetcode
tags: 
- Leetcode
- javascript
- java
- c++
- array
- binary search
---

## 问题描述

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```
<!--more-->

Example 2:

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```

## 解题思路

- 从数组的左下角开始，此后的每一次跳转的关键均在行的最左侧；
- 若是target小于左下角数值，则到上一行寻找，跳转的位置为上一行的最左侧；
- 若是target大于左下角值，则在当前行中寻找。

代码如下：

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    
    var row = matrix.length;
    var col = matrix[0].length;
    
    if (target < matrix[0][0] || target > matrix[row-1][col-1]) return false;
    
    var i=row-1;
    var j=0;
    while (i>=0 && j<col) {
        if (target === matrix[i][j]) return true;
        if (target > matrix[i][j]) {
            j++;
        } else if (target < matrix[i][j]) {
            i--;
        }
    }
    return false;
};
```

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length==0 || matrix[0].length==0) return false;
    
        int row = matrix.length;
        int col = matrix[0].length;

        if (target < matrix[0][0] || target > matrix[row-1][col-1]) return false;

        int i=row-1;
        int j=0;
        while (i>=0 && j<col) {
            if (target == matrix[i][j]) return true;
            if (target > matrix[i][j]) {
                j++;
            } else if (target < matrix[i][j]) {
                i--;
            }
        }
        return false;
    }
}
```

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.size()==0 || matrix[0].size()==0) return false;
    
        int row = matrix.size();
        int col = matrix[0].size();

        if (target < matrix[0][0] || target > matrix[row-1][col-1]) return false;

        int i=row-1;
        int j=0;
        while (i>=0 && j<col) {
            if (target == matrix[i][j]) return true;
            if (target > matrix[i][j]) {
                j++;
            } else if (target < matrix[i][j]) {
                i--;
            }
        }
        return false;
    }
};
```

时间复杂度：O(m+n)

空间复杂度：O(1)