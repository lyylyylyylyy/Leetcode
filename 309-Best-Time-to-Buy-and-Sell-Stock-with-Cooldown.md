---
title: 309-Best-Time-to-Buy-and-Sell-Stock-with-Cooldown
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- java
- dp
comment: true
mathjax: false
date: 2020-10-28 19:30:43
---

## 问题描述

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
<!--more-->

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

Example:
```
Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
```

## 解题思路

- 每一天的状态只能是buy或者sell或者cooldown三种状态中的一种

```
s0[i] = max(s0[i - 1], s2[i - 1])
s1[i] = max(s0[i - 1] - prices[i], s1[i - 1])
s2[i] = s1[i - 1] + prices[i]

s0 —— sell后rest或者rest后rest
s1 —— rest后的buy或者buy后的rest
s2 —— rest后的sell
```

- 每次的状态都只与前一次的状态有关，所以可以把空间复杂度从O(n)降到O(1)

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1)
            return 0;
        var s0 = 0;
        var s1 = -prices[0];
        var s2 = -Infinity;
        for (var i = 1; i < prices.length; i++){
            var pre0 = s0;
            var pre1 = s1;
            var pre2 = s2;
            s0 = Math.max(pre0, pre2);
            s1 = Math.max(pre0 - prices[i], pre1);
            s2 = pre1 + prices[i];
        }
        //最大利润不可能出现在buy而未sell的时候，所以不考虑s1
        return Math.max(s0, s2);
};

```

- Java
  
```java
class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length <= 1)
            return 0;
        int s0 = 0;
        int s1 = -prices[0];
        int s2 = Integer.MIN_VALUE;
        for (int i = 1; i < prices.length; i++){
            int pre0 = s0;
            int pre1 = s1;
            int pre2 = s2;
            s0 = Math.max(pre0, pre2);
            s1 = Math.max(pre0 - prices[i], pre1);
            s2 = pre1 + prices[i];
        }
        //最大利润不可能出现在buy而未sell的时候，所以不考虑s1
        return Math.max(s0, s2);
    }
}
```

- c++

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() <= 1)
            return 0;
        int s0 = 0;
        int s1 = -prices[0];
        int s2 = INT_MIN;
        for (int i = 1; i < prices.size(); i++){
            int pre0 = s0;
            int pre1 = s1;
            int pre2 = s2;
            s0 = max(pre0, pre2);
            s1 = max(pre0 - prices[i], pre1);
            s2 = pre1 + prices[i];
        }
        //最大利润不可能出现在buy而未sell的时候，所以不考虑s1
        return max(s0, s2);
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

