---
title: 85-Maximal-Rectangle
categories: Leetcode
tags: 
- Leetcode
- javascript
- array
comment: true
mathjax: false
date: 2021-02-02 15:23:45
---

## 问题描述

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
<!--more-->
 

Example 1:

![](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg)
```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
```

Example 2:
```
Input: matrix = []
Output: 0
```

Example 3:
```
Input: matrix = [["0"]]
Output: 0
```

Example 4:
```
Input: matrix = [["1"]]
Output: 1
```

Example 5:
```
Input: matrix = [["0","0"]]
Output: 0
``` 

Constraints:

- rows == matrix.length
- cols == matrix.length
- 0 <= row, cols <= 200
- matrix[i][j] is '0' or '1'.


## 解题思路

- 二维矩阵每一层向上都可以看做一个直方图，输入矩阵有多少行，就可以形成多少个直方图。
- 将每一层都当作直方图的底层，并向上构造整个直方图。
- 统计每一行的连续1的个数，使用一个数组 record, 其中 record[i][j] 表示第i行，第j个位置水平方向连续1的个数，若 matrix[i][j] 为0，那对应的 record[i][j] 也一定为0。
- 统计好了之后，再次遍历每个位置，首先每个位置的 record 值都先用来更新结果 result，因为高度为1也可以看作是矩形，然后我们向上方遍历，上方 (i, j-1) 位置也会有 record 值，但是用二者之间的较小值才能构成矩形（作为矩形的底边），用新的矩形面积来更新结果 result。
- 这样一直向上遍历，直到遇到0，或者是越界的时候停止，这样就可以找出所有的矩形了。ß


- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0;
    
    var m = matrix.length;
    var n = matrix[0].length;
    
    var result = 0;
    
    var record = new Array(m).fill(0).map(x => new Array(n).fill(0));
    
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] == '0') continue;
            if (j > 0) {
                record[i][j] = record[i][j - 1] + 1;
            } else {
                record[i][0] = 1;
            }
        }
    }
    
    
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (record[i][j] == '0') continue;
            var tmp = record[i][j];
            result = Math.max(tmp, result);
            for (var k = i - 1; k >= 0 && record[k][j] != 0; --k) {
                tmp = Math.min(tmp, record[k][j]);
                result = Math.max(result, tmp * (i - k + 1));
            }
        }
    }
    return result;
};

```

- 时间复杂度：O(m2n)
- 空间复杂度：O(mn)

