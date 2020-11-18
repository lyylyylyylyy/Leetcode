---
title: 376-Wiggle-Subsequence
categories: Leetcode
tags: 
- Leetcode
- dynamic planning
- javascript
comment: true
mathjax: false
date: 2020-11-18 21:32:59
---

## 问题描述

A sequence of numbers is called a wiggle sequence if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.
<!--more-->
For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.

Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.

Example 1:
```
Input: [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence.
```
Example 2:
```
Input: [1,17,5,10,13,15,10,5,16,8]
Output: 7
Explanation: There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].
```
Example 3:
```
Input: [1,2,3,4,5,6,7,8,9]
Output: 2
```
Follow up:
Can you do it in O(n) time?

## 解题思路

- `dp[i][0]`表示在i之前最长子序列以正差结尾；
- `dp[i][1]`表示在i之前最长子序列以负差结尾；
- 以此表示序列的增加或减少；
- 状态方程为：
- `dp[i][0] = dp[i - 1][1] + 1;`
- `dp[i][1] = dp[i - 1][0] + 1;`

- 代码如下：

- JavaScript

```JavaScript
var wiggleMaxLength = function(nums) {
    var n = nums.length;
    if(n == 0) return 0;
    var dp = new Array(n).fill(new Array(2));
    
    dp[0][0] = dp[0][1] = 1;
    for(var i = 1; i < n; i ++){
        if(nums[i] > nums[i - 1]){
            dp[i][0] = dp[i - 1][1] + 1;
            dp[i][1] = dp[i - 1][1];
        }else if(nums[i] < nums[i -1]){
            dp[i][1] = dp[i - 1][0] + 1;
            dp[i][0] = dp[i - 1][0];
        }else{
            dp[i][0] = dp[i - 1][0];
            dp[i][1] = dp[i - 1][1];
        }
    } 
    return Math.max(dp[n - 1][0], dp[n - 1][1]);
};

```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

