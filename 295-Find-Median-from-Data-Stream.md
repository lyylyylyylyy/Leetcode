---
title: 295-Find-Median-from-Data-Stream
categories: Leetcode
tags: 
- Leetcode
- javascript
- array
comment: true
mathjax: false
date: 2020-11-05 20:59:18
---

## 问题描述

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.
<!--more-->
For example,
```
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5
```
Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:
```
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

Follow up:

- If all integer numbers from the stream are between 0 and 100, how would you optimize it?
- If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

## 解题思路



- 代码如下：

- JavaScript

```JavaScript
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = new Array();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.arr.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    this.arr.sort((a, b) => {
        return a-b;
    })
    if (this.arr.length%2!=0) {
        return this.arr[Math.floor(this.arr.length/2)]
    } else {
        return (this.arr[this.arr.length/2] + this.arr[this.arr.length/2-1])/2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

```
