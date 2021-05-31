---
title: 238-Product-of-Array-Except-Self
categories: Leetcode
tags: 
- Leetcode
- javascript
- array
comment: true
mathjax: false
date: 2020-11-08 23:31:01
---

## 问题描述

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
<!--more-->
Example:
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
```
Note: Please solve it without division and in O(n).

Follow up:
- Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)



## 解题思路

- 第二种方法：利用正向和反向遍历，记录前后两部分的乘积，最后把两边的值乘起来


- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var multiplex = 1;
    var result = new Array();
    var zero = 0;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            multiplex = multiplex * nums[i];
        }
        if (nums[i] == 0) zero++;
    }
    
    if (zero > 1) {
        result = new Array(nums.length).fill(0);
        return result;
    }
    
    for (var i=0; i<nums.length; i++) {
        if (nums[i] == 0) {
            result.push(multiplex);
        }
        if (nums[i]!=0 && zero>0) result.push(0);
        if (nums[i]!=0 && zero<=0) result.push(multiplex/nums[i]);
    }
    return result;
};
```

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var answer = [];
    var product = 1;
    
    for (var i = 0; i < nums.length; i++) {
        product = product * nums[i];
        answer.push(product);
    }
    
    product = 1;
    for (var i = nums.length - 1; i > 0; i--) {
        answer[i] = answer[i-1] * product;
        product = product * nums[i];
    }
    answer[0] = product;
    return answer;
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

