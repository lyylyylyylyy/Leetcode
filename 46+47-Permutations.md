---
date: 2020-8-08
title: Permutations II
categories: Leetcode
tags: 
- Leetcode
- javascript
comment: true
mathjax: true
---

## 问题描述

- Permutations II

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:
```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```
<!--more-->
## 解题思路

思路如下：

- 因为这个问题中包含重复元素，所以一个简单的处理方法是，先将输入的nums排序，这样重复元素就会到一块。然后，我们采用递归回溯的思想就可以解决。
- 借助一个数组visited，来记录某元素是否被访问过，若是访问过，则不被记录。
- 创建一个数组current，来记录某个可能的排列，若是current数组长度达到最大，则推入result数组。
- 通过`nums[i] == nums[i-1]`来去处重复的排列。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let visited = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    
    function dfs(nums, current, visited) {
        if(current.length == nums.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] == nums[i-1] && !visited[i-1])){
                continue;
            }
                visited[i] = true; 
                dfs(nums, current.concat(nums[i]), visited);
                visited[i] = false;
        }
    }
    
    dfs(nums, [], visited);
    return result;
};
```

- Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

Example 2:
```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

Example 3:
```
Input: nums = [1]
Output: [[1]]
```

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const arr = [];
    permuted(arr, [], nums);
    return arr;
    
    function permuted(arr, tempArr, nums) {
        if (tempArr.length === nums.length) {
            arr.push(tempArr.slice());
        } else {
            nums.map(n => {
                if (tempArr.indexOf(n) === -1) {
                    tempArr.push(n);
                    permuted(arr, tempArr, nums);
                    tempArr.pop();
                }
            });
        }
    }
};
```

- 时间复杂度：O(n!)
