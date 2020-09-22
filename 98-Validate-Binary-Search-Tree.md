---
title: 98-Validate-Binary-Search-Tree
date: 2020-09-08 21:42:13
category: Leetcode
tags: 
- Leetcode
- javascript
- java
- tree
---

## 问题描述

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
```
Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
```
<!--more-->

```
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
```

Explanation: The root node's value is 5 but its right child's value is 4.

## 解题思路

- 二叉搜索树左节点都比根结点小，右节点都比根结点大，且左右子树也都是二叉搜索树
- 设置最小值min和最大值max，分别为，遍历过程中的最大和最小值
- 对整个搜索树进行深度优先的搜索遍历
- 若是左子树的值比这个最大值大，或者右子树值比这个最小值小，则为false

代码如下：

```javascript
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    if (root.length === 1) return true;
    
    
    var result = true;
    
    dfs(root, null, null);
    
    return result;
    
    function dfs(root, min, max) {
        if (!root || !result) {
            return;
        }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            result =  false; 
        }
        
        
        dfs(root.left, min, root.val);
        dfs(root.right, root.val, max);
    }
};
```

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        return helper(root, null, null);
    }
    
    boolean helper(TreeNode root, Integer min, Integer max) {
        if (root == null)
            return true;
        
        if ((min != null && root.val <= min) || (max != null && root.val >= max))
            return false;
        
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
}
```
时间复杂度：O(n)
空间复杂度：O(1)   