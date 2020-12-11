---
title: 282-Expression-Add-Operators
categories: Leetcode
tags: 
- Leetcode
- javascript
- dfs
comment: true
mathjax: false
date: 2020-12-09 21:46:32
---

## 问题描述

Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.
<!--more-->
Example 1:
```
Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
```

Example 2:
```
Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
```

Example 3:
```
Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
```

Example 4:
```
Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
```

Example 5:
```
Input: num = "3456237490", target = 9191
Output: []
```

Constraints:

- 0 <= num.length <= 10
- num only contain digits.

## 解题思路



- 代码如下：

JavaScript

```JavaScript
var addOperators = function(num, target) {
    let paths = [];
    
    let generatePaths = (currPath, num, currPos, runningEval, prevEval) => {
        if (currPos === num.length) {
            if (runningEval === target) {
                paths.push(currPath);
            }
            return;
        }

        // num中的每一个数字有4种操作
        // 1. 用更新后的属性来进行递归操作
        // 2.3.4. 把 +, -, * 加到path中 ，然后用更新后的属性进行递归调用

        // 从num中现在的位置的第一个索引开始，尝试所有可能的长度的nums
        let currNum = 0;
        for (let i = currPos; i < num.length; i++) {
            // 现在position是0，我们只能作为一个单独数字使用他，应该是0
            // 如果不是单独以0开头的数字，这个数字可以看成是合理的
            if (i !== currPos && num[currPos] === "0") break;
            let currNum = parseInt(num.substring(currPos, i + 1));
            // position 0 被单独考虑, 因为在curNum之前没有可以操作的数字
            if (currPos === 0) {
                generatePaths(currPath + currNum, num,  i + 1, currNum, currNum);
            } else {
                generatePaths(currPath + "+" + currNum, num, i + 1, runningEval + currNum, currNum);
                generatePaths(currPath + "-" + currNum, num,  i + 1, runningEval - currNum, -currNum);
                generatePaths(currPath + "*" + currNum, num,  i + 1, runningEval - prevEval + prevEval * currNum, prevEval * currNum);
            }
        }
    }
    
    if (num === null || num.length === 0) return paths;
    generatePaths("", num, 0, 0, 0);
    return paths;
};

```

- 时间复杂度：O(4^n)
- 空间复杂度：O(n)

