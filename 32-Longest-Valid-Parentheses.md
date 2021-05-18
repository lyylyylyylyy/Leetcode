---
title: 32-Longest-Valid-Parentheses
categories: Leetcode
tags: 
- Leetcode
- stack
comment: true
mathjax: false
date: 2021-05-18 21:01:35
---

## 问题描述

[问题描述](https://leetcode.com/problems/longest-valid-parentheses/)
<!--more-->

## 解题思路



- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [-1];//设置无效右括号的初始值
    var ans = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            //如果栈为空，说明当前的右括号为没有被匹配的右括号，我们将其下标放入栈中来更新我们之前提到的「最后一个没有被匹配的右括号的下标」
                //如果栈不为空，当前右括号的下标减去栈顶元素即为「以该右括号为结尾的最长有效括号的长度
                //栈中的右括号只会保留最后一个无效的
            if (stack.length == 0) {
                stack.push(i);
            } else {
                ans = Math.max(ans,i-stack[stack.length-1]);
            }
        }
    }
    return ans;
};
```

- 时间复杂度：O(n)
- 空间复杂度：O(n)

