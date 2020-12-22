---
title: 337-House-Robber-III
categories: Leetcode
tags: 
- Leetcode
- javascript
- dfs
comment: true
mathjax: false
date: 2020-12-22 22:11:28
---

## 问题描述

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.
<!--more-->
Example 1:
```
Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
```
Example 2:
```
Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
```

## 解题思路

方法1:

- 因为只有两种状态所以我们用一个数组来保存，当0时，就为不打劫当前节点，当为1时，就为打劫当前节点。
- 所以当为0时，我们只需要返回左子树和右子树的最大和即可，当为1时，我们只需要将root节点的值加上不打架左子树和右子树的结果返回，也就是左子树状态码0和右子树状态码为0的状态。

方法2:

- 如果我们已经打劫了root节点，那么根据题目的要求，我们就不能打劫root的左子节点，和右子节点，所以，接下来的情况就有四种(root.left.left, root.left.right, root.right.left, root.right.right)，就是root的孙子辈的节点。把孙子辈节点的值加起来就行了。
- 如果我们不打劫root节点，那么根据题目要求，我们可以打劫左子树和右子树。
我们把这两种情况分别求出来，最后取最大值就是root节点的值

- 代码如下：

- 方法1

```JavaScript
var rob = function(root) {
    var res = dfs(root);
    return Math.max(res[0], res[1]);
    
    function dfs(root) {
        if (!root) return [0,0];
        
        var left = dfs(root.left);
        var right = dfs(root.right);
        
        var res = [];
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        res[1] = left[0] + right[0] + root.val;
        return res;
    }
};


```

- 方法2:

```javascript
var rob = function(root) {
    if(root == null) return 0;
    var val = root.val;
            
    if(root.left != null) {
        val += rob(root.left.left) + rob(root.left.right);
    }
    
    if(root.right != null) {
        val += rob(root.right.left) + rob(root.right.right);
    }
            
    return Math.max(val, rob(root.left) + rob(root.right));
};

```

- 时间复杂度：O(n)
- 空间复杂度：O(1)

