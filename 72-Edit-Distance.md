---
title: 72-Edit-Distance
categories: Leetcode
tags: 
- Leetcode
- javascript
- dp
comment: true
mathjax: false
date: 2021-01-11 21:11:58
---

## 问题描述

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 
<!--more-->
Example 1:
```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

Example 2:

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

Constraints:

- 0 <= word1.length, word2.length <= 500
- word1 and word2 consist of lowercase English letters.

## 解题思路

方法1: 递归+memo数组
- 对于当前比较的两个字符 `word1[i]` 和 `word2[j]`，若二者相同，直接跳到下一个位置。
- 若不相同，有三种处理方法，首先是直接插入一个 `word2[j]`，那么 `word2[j]` 位置的字符就跳过了，接着比较 `word1[i]` 和 `word2[j+1]` 即可。第二个种方法是删除，即将 `word1[i]` 字符直接删掉，接着比较 `word1[i+1] `和 `word2[j]` 即可。第三种则是将 `word1[i]` 修改为 `word2[j]`，接着比较 `word1[i+1]` 和 `word[j+1]` 即可。
- 需要去掉大量的重复计算，这里使用记忆数组 `memo` 来保存计算过的状态，这里的 `insert`，`remove`，`replace` 仅仅是表示当前对应的位置分别采用了插入，删除，和替换操作，整体返回的最小距离，后面位置的还是会调用递归返回最小的，



```JavaScript
var minDistance = function(word1, word2) {
    // recursive + memo
    var m = word1.length;
    var n = word2.length;
    
    var memo = new Array(m).fill(0).map(element => new Array(n).fill(0));  // 深拷贝
    
    return helper(word1, 0, word2, 0, memo);
    
    function helper(word1, i, word2, j, memo) {
        if (i == word1.length) return word2.length - j;
        if (j == word2.length) return word1.length - i;
        
        if (memo[i][j] > 0) return memo[i][j];
        
        var res = 0;
        if (word1[i] == word2[j]) {
            return helper(word1, i+1, word2, j+1, memo);
        } else {
            var insert = helper(word1, i, word2, j+1, memo);
            var remove = helper(word1, i+1, word2, j, memo);
            var replace = helper(word1, i+1, word2, j+1, memo);
            res = Math.min(insert, remove,replace) + 1;
        }
        return memo[i][j] = res;
    }
};

```

- 时间复杂度：O(max(m,n))
- 空间复杂度：O(m*n)

方法2: dp
- `dp[i][j]` 表示从 `word1` 的前i个字符转换到 `word2` 的前j个字符所需要的步骤。
- 当 `word1[i] == word2[j]` 时，`dp[i][j] = dp[i - 1][j - 1]`，其他情况时，`dp[i][j]` 是其左，左上，上的三个值中的最小值加1，其实这里的左，上，和左上，分别对应的增加，删除，修改操作.
  

```JavaScript
var minDistance = function(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    
    var dp = new Array(m+1).fill(0).map(element => new Array(n+1).fill(0));
    
    for (var i = 0; i <= m; ++i) dp[i][0] = i;
    for (var i = 0; i <= n; ++i) dp[0][i] = i;
    for (var i = 1; i <= m; ++i) {
        for (var j = 1; j <= n; ++j) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[m][n];
};

```

- 时间复杂度：O(max(m,n))
- 空间复杂度：O(m*n)

