---
title: 57-Insert-Interval
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- array
comment: true
mathjax: false
date: 2020-11-03 16:04:57
---

## 问题描述

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

<!--more-->

Example 1:

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

Example 2:

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

Example 3:

```
Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
```

Example 4:

```
Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
```

Example 5:

```
Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
```

Constraints:

-0 <= intervals.length <= 104
-intervals[i].length == 2
-0 <= intervals[i][0] <= intervals[i][1] <= 105
-intervals is sorted by intervals[i][0] in ascending order.
-newInterval.length == 2
-0 <= newInterval[0] <= newInterval[1] <= 105

## 解题思路

- 有两种情况，重叠或是不重叠
- 不重叠的情况最好，直接将新区间插入到对应的位置即可，重叠的时候有可能会有多个重叠，需要更新新区间的范围以便包含所有重叠，之后将新区间加入结果 res，最后将后面的区间再加入结果 res。
- 用一个变量 cur 来遍历区间，如果当前 cur 区间的结束位置小于要插入的区间的起始位置的话，说明没有重叠，则将 cur 区间加入结果 res 中，然后 cur 自增1。直到有 cur 越界或有重叠 while 循环退出。
- 再用一个 while 循环处理所有重叠的区间，每次用取两个区间起始位置的较小值，和结束位置的较大值来更新要插入的区间，然后 cur 自增1。直到 cur 越界或者没有重叠时 while 循环退出。
- 之后将更新好的新区间加入结果 res，然后将 cur 之后的区间再加入结果 res 中即可。

- 代码如下：

- JavaScript

```JavaScript
var insert = function(intervals, newInterval) {
    if (intervals.length == 0) {
        intervals.push(newInterval);
        return intervals;
    }
    
    var result = new Array();
    var cur = 0;
    
    while (cur < intervals.length && intervals[cur][1] < newInterval[0]) {
        result.push(intervals[cur]);
        cur++;
    }
    while (cur < intervals.length && intervals[cur][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[cur][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[cur][1]);
        cur = cur + 1;
    }
    result.push(newInterval);
    while (cur < intervals.length) {
        result.push(intervals[cur]);
        cur++;
    }
    return result;
};

```

- Java
  
```java
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        int [][] result = new int[intervals.length + 1][];
        
        int cur = 0;
        int n = intervals.length;
        int flag = 0;
        
        while(cur < n && intervals[cur][1] < newInterval[0]) {
            result[flag++] = intervals[cur];
            cur++;
        }
        
        while (cur < n && intervals[cur][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[cur][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[cur][1]);
            cur++;
        }
        result[flag++] = newInterval;
        
        while (cur < n) {
            result[flag++] = intervals[cur];
            cur++;
        }
        return Arrays.copyOfRange(result, 0, flag);
    }
}
```

- c++

```cpp
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> res;
        int n = intervals.size(), cur = 0;
        while (cur < n && intervals[cur][1] < newInterval[0]) {
            res.push_back(intervals[cur++]);
        }
        while (cur < n && intervals[cur][0] <= newInterval[1]) {
            newInterval[0] = min(newInterval[0], intervals[cur][0]);
            newInterval[1] = max(newInterval[1], intervals[cur][1]);
            ++cur;
        }
        res.push_back(newInterval);
        while (cur < n) {
            res.push_back(intervals[cur++]);
        }
        return res;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

