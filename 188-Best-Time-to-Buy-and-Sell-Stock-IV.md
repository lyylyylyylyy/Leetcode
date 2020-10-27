---
title: 188-Best-Time-to-Buy-and-Sell-Stock-IV
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- java
- dp
comment: true
mathjax: false
date: 2020-10-27 21:01:04
---

## 问题描述

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k transactions.
<!--more-->
Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).


Example 1:

```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

Example 2:

```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

Constraints:
- 0 <= k <= 109
- 0 <= prices.length <= 104
- 0 <= prices[i] <= 1000

## 解题思路

- 当`k >= len/2`时，问题就退化成了可以交易任意次了，所以只要将任意两天股票差大于０的加起来即可
- 当`k < len/2`时，可以记录k次交易每次买之后和卖以后最大的利润：
  - １．第ｉ次买操作买下当前股票之后剩下的最大利润为第(i-1)次卖掉股票之后的利润－当前的股票价格．状态转移方程为：`buy[i] = max(sell[i-1]- curPrice, buy[i])`;
  - ２．第ｉ次卖操作卖掉当前股票之后剩下的最大利润为第ｉ次买操作之后剩下的利润＋当前股票价格．状态转移方程为：`sell[i] = max(buy[i]+curPrice, sell[i])`;

- 代码如下：

- JavaScript

```JavaScript
var maxProfit = function(k, prices) {
    
    if (prices.length < 2 || k == 0) return 0;
    
    if (k >= Math.floor(prices.length/2)) {
        var res = 0;
        for (var i=1; i < prices.length; i++) {
            res = res + Math.max(0, prices[i] - prices[i-1]);
        }
        return res;
    }
    
    var len = prices.length;
    var buy = new Array(len+1).fill(-Infinity);
    var sell = new Array(len+1).fill(0);
    
    for (var i=0; i < len; i++) {
        for (var j=1; j <= k; j++) {
            buy[j] = Math.max(buy[j], sell[j-1]-prices[i]);
            sell[j] = Math.max(sell[j], buy[j]+prices[i]);
        }
    }
    return sell[k];
};

```

- Java
  
```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        if(prices.length ==0) return 0;
        int len = prices.length, ans =0;
        if(k >= len/2)
        {
            for(int i = 1; i < len; i++) 
                if(prices[i]-prices[i-1]>0) ans += prices[i]-prices[i-1];
            return ans; 
        }
        int[] buy = new int[len+1];
        int[] sell = new int[len+1];
        Arrays.fill(buy, Integer.MIN_VALUE);
        Arrays.fill(sell, 0);
        for (int i=0; i < len; i++) {
            for (int j=1; j <= k; j++) {
                buy[j] = Math.max(buy[j], sell[j-1]-prices[i]);
                sell[j] = Math.max(sell[j], buy[j]+prices[i]);
            }
        }
        return sell[k];
    }
}
```

- c++

```cpp
class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        if(prices.size() ==0) return 0;
        int len = prices.size(), ans =0;
        if(k >= len/2)
        {
            for(int i = 1; i < len; i++) 
                if(prices[i]-prices[i-1]>0) ans += prices[i]-prices[i-1];
            return ans; 
        }
        vector<int> buy(len+1, INT_MIN), sell(len+1, 0);
        for(auto val: prices)
        {
            for(int i =1; i <= k; i++)
            {
                buy[i] = max(sell[i-1]-val, buy[i]);
                sell[i] = max(buy[i]+val, sell[i]);
            }
        }
        return sell[k];
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

