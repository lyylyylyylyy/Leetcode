---
title: 289-Game-of-Life
categories: Leetcode
tags: 
- Leetcode
- javascript
- array
comment: true
mathjax: false
date: 2020-11-02 22:52:50
---

## 问题描述

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
<!--more-->
Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:
```
Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
```

Follow up:

- Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
- In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

## 解题思路

- 按照题目要求求解即可。

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var len = board.length;
    var wid = board[0].length;
    
    
    for (var i=0; i<len; i++) {
        for (var j=0; j<wid; j++) {
            let liveCells = aliveNeighbors(board, i, j);
            if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
                board[i][j] = 2
            }
            if (board[i][j] === 0 && liveCells === 3) {
                board[i][j] = 3
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++){
            board[i][j] %= 2;
        }
    }
};
    
let aliveNeighbors = (board, i, j) => {
  let count = 0
  let indexes = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]]
  for (let index of indexes) {
    if (index[0] + i < 0 || index[0] + i > board.length - 1 ||
    index[1] + j < 0 || index[1] + j > board[0].length - 1) continue
    if (board[index[0] + i][index[1] + j] === 1 ||
    board[index[0] + i][index[1] + j] === 2) count++
  }
  return count
}
```



- 时间复杂度：O(mn)
- 空间复杂度：O(1)

