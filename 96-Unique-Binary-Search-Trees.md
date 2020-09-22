---
title: 96-Unique-Binary-Search-Trees
date: 2020-09-07 21:45:33
categories: Leetcode
tags: 
- Leetcode
- javascript
- java
- dynamic planning
- binary search tree
---

## 问题描述

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

```
Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 
```
<!--more-->

Constraints: 1 <= n <= 19

## 解题思路

- 动态规划
- 对于任何一种情况：根节点为`i`，则`[1,i-1]`为左子树，`[i+1,n]`为右子树
- 左子树有能够构成不同的BST的数量为：`F(i-1)`，右子树能够构成的不同BST的数量为`F(n-i)`，左右子树相互独立，那么：`F(n)=F(i-1)*F(n-i)`,i属于[1,n]，i有n种情况，须完全遍历.
- dp含义：i个元素的时候,形成二叉搜索树的个数
- dp表达式：`dp[i] = dp[i] + dp[j]*dp[i-j-1];`

代码如下：

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = new Array(n+1).fill(0);
    dp[0] = 1;
    for (var i=1;i<=n;i++) {
        for (var j=0;j<i;j++) {
            dp[i] = dp[i] + dp[j]*dp[i-j-1];
        }
    }
    return dp[n];
};
```

```java
class Solution {
    public int numTrees(int n) {
        int[] dp = new int[n+1];
        dp[0] = 1;
        for (var i=1;i<=n;i++) {
            for (var j=0;j<i;j++) {
                dp[i] = dp[i] + dp[j]*dp[i-j-1];
            }
        }
        return dp[n];
    }
}
```

时间复杂度：O(n)
空间复杂度：O(n)