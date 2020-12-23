---
title: 103-Binary-Tree-Zigzag-Level-Order-Traversal
categories: Leetcode
tags: 
- Leetcode
- javascript
- tree
- dfs
comment: true
mathjax: false
date: 2020-12-23 21:35:08
---

## 问题描述

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
<!--more-->
For example:
```
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
```

## 解题思路

- 本质上是dfs遍历，使用level来记录节点的层数，将每一个节点放入对应的数组中。
- 偶数层正序，使用push方法，奇数层反序，使用unshift方法。



- 代码如下：

- JavaScript

```JavaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];
    helper(root, 0, res);
    return res;
};

var helper = function(node, level, res){
    if(!node) return;
    if(!res[level]) res[level] = [];
    level % 2 ? res[level].unshift(node.val) : res[level].push(node.val);
    helper(node.left, level + 1, res);
    helper(node.right, level + 1, res);
}

```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

