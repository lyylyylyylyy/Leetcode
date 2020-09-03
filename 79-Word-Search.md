---
title: 79-Word-Search
date: 2020-09-03 21:07:27
tags: Leetcode-JavaScript
category: Leetcode-JavaScript
---

## 问题描述

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
<!--more-->

```
Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

Constraints:

- board and word consists only of lowercase and uppercase English letters.
- 1 <= board.length <= 200
- 1 <= board[i].length <= 200
- 1 <= word.length <= 10^3


## 解题思路

- 采用回溯法进行搜索，此过程中可以对一些情况进行剪枝；
- 遍历2D数组，若是与word首字母匹配则进入搜索流程；
- 搜索方向为上、下、左、右，4个方向，但是如果处于四个边界处，则只有2/3方向可以进行搜索；
- `visited`记录是否已经访问过此元素，若是访问过，则不向此方向跳转，此方向搜索结束后，则还原为未访问过，这是因为，下一轮搜索可以对此位置进行搜索；
- 若是result为true，即已经搜索到了word，则不需要再继续搜索；
- 若是前缀不匹配word，也没必要继续搜索。


代码如下：

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board.length === 0) return false;
    if (word.length === 0) return false;
    
    var start = word[0];
    var result = false;
    let visited = new Set();

    
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == start) {
                visited.add(`${i}-${j}`)
                result = helper(i, j, word[0]) || result;
                visited.delete(`${i}-${j}`)
                if (result) {
                    return result;
                }
            }
        }
    }
    return result;
    
    function helper(i,j, str) {
        if (result) return;
        if (str !== word.substr(0, str.length)) return;
        
        if (str.length === word.length) {
            if (str == word) {
                result = true;
                return;
            } else {
                return;
            }
        }
        
        if (i<board.length-1) {
            if (!visited.has(`${i+1}-${j}`)) {
                visited.add(`${i+1}-${j}`)
                r1 = helper(i+1, j, str.concat(board[i+1][j]));
                visited.delete(`${i+1}-${j}`)
            }
        }
        
        if (i>0) {
            if (!visited.has(`${i-1}-${j}`)) {
                visited.add(`${i-1}-${j}`)
                r2 = helper(i-1, j, str.concat(board[i-1][j]))
                visited.delete(`${i-1}-${j}`)
            }
            
        }
        
        if (j<board[0].length-1) {
            if (!visited.has(`${i}-${j+1}`)) {
                visited.add(`${i}-${j+1}`)
                r3 = helper(i, j+1, str.concat(board[i][j+1]))
                visited.delete(`${i}-${j+1}`)
            }
            
        }
        
        if (j>0) {
            if (!visited.has(`${i}-${j-1}`)) {
                visited.add(`${i}-${j-1}`)
                r4 = helper(i, j-1, str.concat(board[i][j-1]))
                visited.delete(`${i}-${j-1}`)
            }
        }
    }
};
```

时间复杂度：O(n2)
空间复杂度：O(m)   m <= n