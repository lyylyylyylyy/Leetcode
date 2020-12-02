---
title: 300-Longest-Increasing-Subsequence
categories: Leetcode
tags: 
- Leetcode
- javascript
- dynamic planning
comment: true
mathjax: false
date: 2020-12-01 14:25:00
---

## 问题描述

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:
```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

Example 2:
```
Input: nums = [0,1,0,3,2,3]
Output: 4
```
Example 3:
```
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

Constraints:

- 1 <= nums.length <= 2500
- -104 <= nums[i] <= 104
 

Follow up:

- Could you come up with the O(n2) solution?
- Could you improve it to O(n log(n)) time complexity?
<!--more-->
## 解题思路

- 一维 dp 数组，其中 `dp[i]` 表示以 `nums[i]` 为结尾的最长递增子串的长度
- 对于每一个 `nums[i]`，从第一个数再搜索到`i`，如果发现某个数小于 `nums[i]`，更新 `dp[i]`，更新方法为 `dp[i] = max(dp[i], dp[j] + 1)`，即比较当前` dp[i]` 的值和那个小于 `num[i]` 的数的 `dp` 值加`1`的大小，就这样不断的更新 `dp` 数组

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length == 1) return 1;
    
    var dp = new Array(nums.length).fill(1);
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};

```


- 时间复杂度：O(n2)
- 空间复杂度：O(n)

