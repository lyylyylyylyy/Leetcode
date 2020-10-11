---
title: 80-Remove-Duplicates-from-Sorted-Array-II
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- array
- two pointers
comment: true
mathjax: false
date: 2020-10-11 22:54:23
---

## 问题描述

Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

```
Example 1:

Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
```
<!--more-->
```
Example 2:

Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.
```

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

## 解题思路

- 一个快指针对所有的数字进行遍历，另外一个慢指针指向了不满足题目要求的第一个位置。这样当遍历到一个新的数字而且这个新的数字和慢指针指向的前两个数字相同时，把它交换到这个不满足的位置，然后两个指针同时右移即可。
- last：慢指针，index：快指针，len：数组长度；
- 循环，找到第一个不相等的位置index，此时last赋值给合理数组的最后一位，此时由于最多只能出现两次，所以len++，保证数组的有效/合理长度；
- 此时，index位置的数字成为慢指针last；
- 将此时的last与len索引处交换，即可完成此次删除/覆盖操作。


- 代码如下：

- JavaScript

```JavaScript

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var n = nums.length;
    if (n <= 2) return n;
    var index = 1;
    var len = 1;
    var last = nums[0];
    
    while (index < n) {
        var count = 1;
        while (index < n && nums[index] == last) {
            count++;
            index++;
        }
        if (count >= 2) nums[len++] = last; 
        
        if (index < n) {
            last = nums[index++];
            nums[len++] = last;
            
        }
    }
    return len;
};

```

- Java
  
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int n = nums.length;
        if (n <= 2) return n;

        int index = 1;
        int len = 1;
        int last = nums[0];

        while (index < n) {
          int count = 1;
          while (index < n && nums[index] == last) {
            ++count;
            ++index;
          }

          if (count >= 2) nums[len++] = last;        

          if (index < n) {
            last = nums[index++];
            nums[len++] = last;
          }
        }
        
        return len;
    }
}
```

- c++

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        const int n = nums.size();
        if (n <= 2) return n;

        int index = 1;
        int len = 1;
        int last = nums[0];

        while (index < n) {
          int count = 1;
          while (index < n && nums[index] == last) {
            ++count;
            ++index;
          }

          if (count >= 2) nums[len++] = last;        

          if (index < n) {
            last = nums[index++];
            nums[len++] = last;
          }
        }

        return len;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

