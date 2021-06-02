---
title: 199-Binary-Tree-Right-Side-View.md
categories: Leetcode
tags: 
- Leetcode
- dfs
comment: true
mathjax: false
date: 2021-06-02 13:21:24
---

## [问题描述](https://leetcode.com/problems/binary-tree-right-side-view/)

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
<!--more-->
![](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)
```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

## 解题思路

- 最右侧看到的节点，就是每一行的最后一个元素，最右侧的元素
- dfs深度遍历，优先遍历右侧的节点，推入res中
- 右侧遍历完成后，看左子树中是否还存在节点，将左子树中的最右侧节点推入res中
- 使用lastlevel记录最深的层数，只有左子树中的层数超过了右侧遍历完成后的lastlevel，才可以看到左子树中的节点，所以dfs遍历时应该记录层数以及更新lastlevel

- 代码如下：

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
var rightSideView = function(root) {
    if(!root) return [];
    
    let res= [];
    let lastLevel = -1;
    
    dfs(root, 0);
    return res;
    
    function dfs(node,level) {
        if(level>lastLevel){
            res.push(node.val);
            lastLevel+=1;
        }
        if(node.right){
            dfs(node.right,level+1);
        }
        if(node.left){
            dfs(node.left,level+1);
        }
    }
};

```




- 时间复杂度：O(n)
- 空间复杂度：O(n)

