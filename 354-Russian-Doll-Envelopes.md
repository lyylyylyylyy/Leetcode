---
title: 354-Russian-Doll-Envelopes
categories: Leetcode
tags: 
- Leetcode
- javascript
- binary search
comment: true
mathjax: false
date: 2020-12-05 22:21:20
---

## 问题描述

You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.
<!--more-->
What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:
```
Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

## 解题思路

- 对数组进行排序。如果宽度相同，则在宽度上上升，在高度上下降。
- 根据height找到[300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- 由于宽度在增加，因此我们只需要考虑高度。
- `[3，4]`不能包含`[3，3]`，因此我们在排序时需要在`[3，3]`之前放置`[3，4]`，否则如果顺序为`[3，3]`，它将被视为递增数字。

- 代码如下：

- JavaScript

```JavaScript
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => {
        if (a[0] == b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });
    
    const dp = [];
    
    for (let i = 0; i < envelopes.length; i++) {
        let index = findIndex(dp, envelopes[i][1]);
        if (index == -1) {
            dp.push(envelopes[i][1]);
        } else if (index != -1) {
            dp[index] = envelopes[i][1];
        }
    }
    return dp.length;
    
    function findIndex(arr, val) {
        let l = 0, r = arr.length - 1, ans = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] >= val) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
};

```



- 时间复杂度：O(nlogn)
- 空间复杂度：O(n)

