---
title: 70-Climbing-Stairs.md
categories: Leetcode
tags: Leetcode
comment: true
mathjax: false
date: 2021-04-24 23:02:34
---

## 问题描述
you are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
<!--more-->
Example 1:
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

Example 2:
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
``` 

Constraints:
- 1 <= n <= 45

## 解题思路

- dp[i]表示到达台阶i处有多少种方法
- 到达台阶i处有两种方式，i-1跳和i-2跳，所以dp[i] = dp[i-1]+dp[i-2]
- 最后返回dp[n]即可

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

