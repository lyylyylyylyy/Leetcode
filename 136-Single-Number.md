---
title: 136-Single-Number
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- java
- array
- two pointers
comment: true
mathjax: false
date: 2020-09-21 22:16:58
---

## 问题描述

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

```
Input: [2,2,1]
Output: 1
```

Example 2:

```
Input: [4,1,2,1,2]
Output: 4
```

<!--more-->
## 解题思路

- 首先排序；
- 排序后，重复的数字是相邻的，所以，通过相邻数字是否相等可以找到，唯一不重复的数字。

- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length===1) return nums[0];
    nums.sort((a,b) => {
        return a-b;
    })
    
    var result = -1;
    var i=0;
    
    while(i<nums.length-2) {
        if (nums[i]==nums[i+1]) {
            i = i+2;
        } else {
            result = nums[i];
            break;
        }
        result = nums[i];
    }
    return result;
};

```

- Java
  
```java
class Solution {
    public int singleNumber(int[] nums) {
        if (nums.length==1) return nums[0];
        Arrays.sort(nums);

        int result = -1;
        int i=0;

        while(i<nums.length-2) {
            if (nums[i]==nums[i+1]) {
                i = i+2;
            } else {
                result = nums[i];
                break;
            }
            result = nums[i];
        }
        return result;
    }
}
```

- c++

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        if (nums.size()==1) return nums[0];
        sort(nums.begin(), nums.end());

        int result = -1;
        int i=0;

        while(i<nums.size()-2) {
            if (nums[i]==nums[i+1]) {
                i = i+2;
            } else {
                result = nums[i];
                break;
            }
            result = nums[i];
        }
        return result;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

