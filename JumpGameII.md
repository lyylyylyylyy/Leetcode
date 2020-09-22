---
title: 45. Jump Game II
categories: Leetcode
tags: 
- Leetcode
- javascript
- greedy
comment: true
mathjax: false
date: 2020-08-30 13:35:27
---

## 问题描述

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

```
Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
```
<!--more-->
Note: You can assume that you can always reach the last index.

## 解题思路

- 代码如下：

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var res=0; // 步数
    var index=0; // 当前位置
    while(index<nums.length-1){
        var n=nums[index]; // 当前可跳跃的距离
        var left=index+1; // 跳跃范围的左边界
        var right=index+n; // 跳跃范围的右边界
        var max=0; // 跳跃范围内的所有点中，能够跳跃最远的点
        // 如果有边界已经超越了终点，返回
        if(right>=nums.length-1) return res+1;
        // 查看范围内每一个点
        for(var i=left;i<=right;i++){
            // 如果当前位置加上跳跃距离能够到达更远的距离
            if(i+nums[i]>=max){
                max=i+nums[i]; // 更新最远距离
                index=i; // 更新下一步为该坐标
            } 
        }
        res++;
    }
    return res++;
};

```

```java
class Solution {
    public int jump(int[] nums) {
        int res=0; // 步数
        int index=0; // 当前位置
        while(index<nums.length-1){
            int n=nums[index]; // 当前可跳跃的距离
            int left=index+1; // 跳跃范围的左边界
            int right=index+n; // 跳跃范围的右边界
            int max=0; // 跳跃范围内的所有点中，能够跳跃最远的点
            // 如果有边界已经超越了终点，返回
            if(right>=nums.length-1) return res+1;
            // 查看范围内每一个点
            for(int i=left;i<=right;i++){
                // 如果当前位置加上跳跃距离能够到达更远的距离
                if(i+nums[i]>=max){
                    max=i+nums[i]; // 更新最远距离
                    index=i; // 更新下一步为该坐标
                } 
            }
            res++;
        }
        return res;
    }
}

```
时间复杂度：O(n)
空间复杂度：O(1)

