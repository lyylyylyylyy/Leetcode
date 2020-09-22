---
title: 101-Symmetric-Tree
date: 2020-09-13 22:06:53
categories: Leetcode
tags: 
- Leetcode
- javascript
- tree
- dfs
---

## 问题描述

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
<!--more-->

But the following [1,2,2,null,3,null,3] is not:
```
    1
   / \
  2   2
   \   \
   3    3
 
```
Follow up: Solve it both recursively and iteratively.

## 解题思路

- 深度优先搜索


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
var isSymmetric = function(root) {
    if (root==null) return true;
        
    return helper(root.left, root.right);
    
   function helper(root1, root2) {
        if (root1==null &&  root2==null) return true;
        if (root1==null &&  root2!=null) return false;
        if (root1!=null &&  root2==null) return false;
        if (root1.val != root2.val) return false;
        if (!helper(root1.left, root2.right)) return false;
        if (!helper(root1.right, root2.left)) return false;
        return true;
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
    public boolean isSymmetric(TreeNode root) {
        if (root==null) return true;
        
        return helper(root.left, root.right);
    }
    private boolean helper(TreeNode root1, TreeNode root2) {
        if (root1==null &&  root2==null) return true;
        if (root1==null &&  root2!=null) return false;
        if (root1!=null &&  root2==null) return false;
        if (root1.val != root2.val) return false;
        if (!helper(root1.left, root2.right)) return false;
        if (!helper(root1.right, root2.left)) return false;
        return true;
    }
}

```

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (root==NULL) return true;
        
        return helper(root->left, root->right);
    }
    bool helper (TreeNode* root1, TreeNode* root2) {
        if (root1==NULL &&  root2==NULL) return true;
        if (root1==NULL &&  root2!=NULL) return false;
        if (root1!=NULL &&  root2==NULL) return false;
        if (root1->val != root2->val) return false;
        if (!helper(root1->left, root2->right)) return false;
        if (!helper(root1->right, root2->left)) return false;
        return true;
    }
};
```