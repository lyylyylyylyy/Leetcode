---
title: 235-Lowest-Common-Ancestor-of-a-Binary-Search-Tree
categories: Leetcode
tags: 
- Leetcode
- tree
- javascript
comment: true
mathjax: false
date: 2020-12-28 22:08:04
---

## 问题描述

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```
<!--more-->
![](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)

Example 2:

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```

Example 3:
```
Input: root = [2,1], p = 2, q = 1
Output: 2
 
```
Constraints:

- The number of nodes in the tree is in the range [2, 105].
- -109 <= Node.val <= 109
- All Node.val are unique.
- p != q
- p and q will exist in the BST.

## 解题思路

- 二叉搜索树，若是p，q比当前根结点小，则父节点必在左子树中，反之，则在右子树中。

- 代码如下：

- JavaScript

```JavaScript
var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};

```



- 时间复杂度：O(n)
- 空间复杂度：O(1)

