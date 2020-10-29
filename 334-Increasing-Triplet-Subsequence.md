---
title: 334-Increasing-Triplet-Subsequence
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- greedy
comment: true
mathjax: false
date: 2020-10-29 22:08:02
---

## 问题描述

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.
<!--more-->
Example 1:
```
Input: [1,2,3,4,5]
Output: true
```

Example 2:

```
Input: [5,4,3,2,1]
Output: false
```

## 解题思路

- 维护两个变量，small[三个数中最小的一个]，small[三个数中的中间值]；
- 如果碰到比第二个值大的说明可以找到升序的三个值，并且在过程中不断更新small和big的值，使得他们最小。

- 代码如下：

- JavaScript

```JavaScript
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
    
    var small = Infinity;
    var big = Infinity;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > big) return true;
        if (nums[i] < small) small = nums[i];
        if (nums[i] > small && nums[i] < big) big = nums[i];
    }
    return false;
};
```

- Java
  
```java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        if (nums.length < 3) return false;
    
        int small = Integer.MAX_VALUE;
        int big = Integer.MAX_VALUE;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > big) return true;
            if (nums[i] < small) small = nums[i];
            if (nums[i] > small && nums[i] < big) big = nums[i];
        }
        return false;
    }
}
```

- c++

```cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        if (nums.size() < 3) return false;
    
        int small = INT_MAX;
        int big = INT_MAX;

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > big) return true;
            if (nums[i] < small) small = nums[i];
            if (nums[i] > small && nums[i] < big) big = nums[i];
        }
        return false;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

