---
title: 134-Gas-Station
categories: Leetcode
tags: 
- Leetcode
- javascript
- java
- greedy
comment: true
mathjax: false
date: 2020-10-15 16:30:21
---

## 问题描述

There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
<!--more-->
Note:

- If there exists a solution, it is guaranteed to be unique.
- Both input arrays are non-empty and have the same length.
- Each element in the input arrays is a non-negative integer.

Example 1:

```
Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```

Example 2:

```
Input: 
gas  = [2,3,4]
cost = [3,4,3]

Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```

## 解题思路

- 对于一个循环数组，如果这个数组整体和 SUM >= 0，那么必然可以在数组中找到这么一个元素：从这个数组元素出发，绕数组一圈，能保证累加和一直是出于非负状态。
- 当我们发现到达k站点邮箱中油量不足后，i 到 k 这些站点都不用作为出发点来试验了，肯定不满足条件，只需要从k+1站点尝试即可。


代码如下：

- JavaScript

```JavaScript
var canCompleteCircuit = function(gas, cost) {
    var sum = 0;  
    var total = 0;  
    var j = -1;  
    for (var i = 0; i < gas.length; i++) {  
        sum += gas[i] - cost[i];  
        total += gas[i] - cost[i];  
        if(sum < 0) {   //之前的油量不够到达当前加油站  
            j = i;  
            sum = 0;  
        }  
    }  
    if (total < 0) return -1;    //所有加油站的油量都不够整个路程的消耗  
    else return j + 1;
};

```

- Java
  
```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int sum = 0;  
        int total = 0;  
        int j = -1;  
        for (int i = 0; i < gas.length; i++) {  
            sum += gas[i] - cost[i];  
            total += gas[i] - cost[i];  
            if(sum < 0) {   //之前的油量不够到达当前加油站  
                j = i;  
                sum = 0;  
            }  
        }  
        if (total < 0) return -1;    //所有加油站的油量都不够整个路程的消耗  
        else return j + 1;
    }
}
```

- c++

```cpp
class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int sum = 0;  
        int total = 0;  
        int j = -1;  
        for (int i = 0; i < gas.size(); i++) {  
            sum += gas[i] - cost[i];  
            total += gas[i] - cost[i];  
            if(sum < 0) {   //之前的油量不够到达当前加油站  
                j = i;  
                sum = 0;  
            }  
        }  
        if (total < 0) return -1;    //所有加油站的油量都不够整个路程的消耗  
        else return j + 1;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

