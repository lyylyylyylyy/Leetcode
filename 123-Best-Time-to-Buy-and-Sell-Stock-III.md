---
title: 123-Best-Time-to-Buy-and-Sell-Stock-III
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- array
- dp
comment: true
mathjax: false
date: 2020-10-02 23:38:18
---

## 问题描述

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

 <!--more-->

Example 1:

```
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

Example 2:

```
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
```

Example 3:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

Example 4:

```
Input: prices = [1]
Output: 0
```

Constraints:

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^5

## 解题思路

- 总体思路是：我们以i为分界，求在prices[0:i]交易一次的最大值和在prices[i:n]交易一次的最大值，然后相加即可.
- 为此，我们遍历两趟prices:
    - 首先我们正向遍历prices，以`prices[i]`为卖出价，保留`minprice = min(prices[0:i])`为买进价格，求得交易一次在prices[0:i]的最大值.
    - 然后我们反向遍历prices，以prices[i]为买进价，保留`maxprice = max(prices[i:n])`为卖出价格，求得交易一次在`prices[i:n]`的最大值
    - 我们将对应位置的值相加，其最大值即为交易两次的总利润最大值.


- 代码如下：

- JavaScript

```JavaScript
var maxProfit = function(prices) {
    if (prices == null || prices.length <= 1) {
            return 0;
        }
 
        var left = new Array(prices.length);
        var right = new Array(prices.length);
 
        // DP from left to right;
        left[0] = 0;
        var min = prices[0];
        for (var i = 1; i < prices.length; i++) {
            min = Math.min(prices[i], min);
            left[i] = Math.max(left[i - 1], prices[i] - min);
        }
 
        //DP from right to left;
        right[prices.length - 1] = 0;
        var max = prices[prices.length - 1];
        for (var i = prices.length - 2; i >= 0; i--) {
            max = Math.max(prices[i], max);
            right[i] = Math.max(right[i + 1], max - prices[i]);
        }
 
        var profit = 0;
        for (var i = 0; i < prices.length; i++){
            profit = Math.max(left[i] + right[i], profit); 
        }
 
        return profit;
};

```

- Java
  
```java
class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }
 
        int[] left = new int[prices.length];
        int[] right = new int[prices.length];
 
        // DP from left to right;
        left[0] = 0;
        int min = prices[0];
        for (int i = 1; i < prices.length; i++) {
            min = Math.min(prices[i], min);
            left[i] = Math.max(left[i - 1], prices[i] - min);
        }
 
        //DP from right to left;
        right[prices.length - 1] = 0;
        int max = prices[prices.length - 1];
        for (int i = prices.length - 2; i >= 0; i--) {
            max = Math.max(prices[i], max);
            right[i] = Math.max(right[i + 1], max - prices[i]);
        }
 
        int profit = 0;
        for (int i = 0; i < prices.length; i++){
            profit = Math.max(left[i] + right[i], profit); 
        }
 
        return profit;
    }
}
```

- c++

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() <= 1) {
            return 0;
        }
 
        vector<int> left(prices.size(), 0);
        vector<int> right(prices.size(), 0);
 
        // DP from left to right;
        left[0] = 0;
        int mini = prices[0];
        for (int i = 1; i < prices.size(); i++) {
            mini = min(prices[i], mini);
            left[i] = max(left[i - 1], prices[i] - mini);
        }
 
        //DP from right to left;
        right[prices.size() - 1] = 0;
        int maxi = prices[prices.size() - 1];
        for (int i = prices.size() - 2; i >= 0; i--) {
            maxi = max(prices[i], maxi);
            right[i] = max(right[i + 1], maxi - prices[i]);
        }
 
        int profit = 0;
        for (int i = 0; i < prices.size(); i++){
            profit = max(left[i] + right[i], profit); 
        }
 
        return profit;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

