---
title: 79-Word-Search.md
categories: Leetcode
tags: 
- Leetcode
- Array
- Backtracking
comment: true
mathjax: false
date: 2021-04-14 21:57:06
---

## 问题描述

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
<!--more-->
Example 1:
![example1](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```
![example2](https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg)
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```
![example3](https://assets.leetcode.com/uploads/2020/10/15/word3.jpg)
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```
Constraints:
- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board and word consists of only lowercase and uppercase English letters.

## 解题思路

- dfs深度搜索，不断的回溯递归
- 注意结束条件`index >= word.length || i < 0 || j < 0 || i >= m || j >= n`和`str.length == word.length`
- 注意标记已经访问过的元素，防止重复，同时一轮dfs后记得复原

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length;
    var n = board[0].length;
    var result = false;
    
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            result = dfs(i, j, '', 0) || result;
        }
    }
    return result;
    
    function dfs(i, j, str, index) {
        if (str.length == word.length) {
            console.log(str);
            return true;
        }
        if (index >= word.length || i < 0 || j < 0 || i >= m || j >= n) return false;
        
        if (board[i][j] == word[index] && board[i][j] !== 0) {
            var tmp = board[i][j];
            board[i][j] = 0;
            var flag = dfs(i-1, j, str+board[i][j], index+1) || dfs(i+1, j, str+board[i][j], index+1) || dfs(i, j-1, str+board[i][j], index+1) || dfs(i, j+1, str+board[i][j], index+1);
            board[i][j] = tmp;
            return flag;
        }
    }
};

```

- 时间复杂度：O(m*n*word.length)
- 空间复杂度：O(1)

