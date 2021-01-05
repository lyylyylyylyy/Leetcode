---
title: 279-Perfect-Squares
categories: Leetcode
tags: Leetcode
comment: true
mathjax: false
date: 2021-01-05 20:14:14
---

## 问题描述

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:
```
Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
```
<!--more-->
Example 2:
```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```


## 解题思路

方法1:

- **<div style = "color: red">四平方和定理</div>**:根据四平方和定理，任意一个正整数均可表示为4个整数的平方和，其实是可以表示为4个以内的平方数之和，那么就是说返回结果只有 1,2,3 或4其中的一个。
- 首先我们将数字化简一下，由于一个数如果含有因子4，那么我们可以把4都去掉，并不影响结果，比如2和8,3和12等等，返回的结果都相同。
- 如果一个数除以8余7的话，那么肯定是由4个完全平方数组成。


- JavaScript

```JavaScript
var numSquares = function(n) {
    while (n % 4 == 0) n /= 4;
    if (n % 8 == 7) return 4;
    for (int a = 0; a * a <= n; ++a) {
        int b = sqrt(n - a * a);
        if (a * a + b * b == n) {
            return !!a + !!b;
        }
    }
    return 3;
};

```

方法2:

- `dp[i]` 表示正整数i能少能由多个完全平方数组成，用 `dp[i]` 来更新 `dp[i + j * j]`
- 建立一个长度为 n+1 的一维dp数组，将第一个值初始化为0，其余值都初始化为 Infinity
- i从0循环到n，j从1循环到 `i+j*j <= n` 的位置，然后每次更新 `dp[i+j*j]` 的值，动态更新 dp 数组
  
```javascript
var numSquares = function(n) {
    var dp = new Array(n+1).fill(Infinity);
    
    dp[0] = 0;
    
    for (var i = 0; i<= n; i++) {
        for (var j = 0; j*j+i <=n; j++) {
            dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
        }
    }
    
    return dp.pop();
};
```



- 时间复杂度：O(n * sqrt(n))
- 空间复杂度：O(n)

