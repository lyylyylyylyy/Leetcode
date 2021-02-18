---
title: 94-Binary-Tree-Inorder-Traversal
categories: Leetcode
tags: 
- Leetcode
- tree
- javascript
comment: true
mathjax: false
date: 2021-02-18 21:36:11
---

## 问题描述

Given the root of a binary tree, return the inorder traversal of its nodes' values.
<!--more-->

## 解题思路



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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return [];
    
    var res = [];
    var stack = [];
    
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    
    return res;
};

```

- 时间复杂度：O(n)
- 空间复杂度：O(n)

