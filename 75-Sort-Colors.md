---
title: 75-Sort-Colors
date: 2020-09-19 22:31:54
categories: Leetcode
tags: 
- Leetcode
- javaScript
- c++
- java
- array
- two pointers
- sort
comment: true
mathjax: true

---

## 问题描述

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Follow up:

- Could you solve this problem without using the library's sort function?
- Could you come up with a one-pass algorithm using only O(1) constant space?
 

Example 1:

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```
<!--more-->
Example 2:

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

Example 3:

```
Input: nums = [0]
Output: [0]
```

Example 4:

```
Input: nums = [1]
Output: [1]
```

Constraints:

- n == nums.length
- 1 <= n <= 300
- nums[i] is 0, 1, or 2.

## 解题思路

- 选择排序思想
- 将i位置处视作最小值，在其他未排序序列中进行排序，找到最小值，然后与nums[i]进行比较，从而将最小值放在首位。

代码如下：

- JavaScript：
  
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i=0;
    var j = nums.length-1;
    
    while (i<nums.length-1) {
        j = nums.length-1;
        
        while (j>i+1) {
            if (nums[j]<nums[j-1]) {
                var tmp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = tmp;
            }
            j--;
        }
        if (nums[i]>nums[j]) {
            var tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
        }
        i++;
    }
    
    return nums;
};
```

- Java


```java
class Solution {
    public void sortColors(int[] nums) {
        int i=0;
        int j = nums.length-1;

        while (i<nums.length-1) {
            j = nums.length-1;

            while (j>i+1) {
                if (nums[j]<nums[j-1]) {
                    int tmp = nums[j];
                    nums[j] = nums[j-1];
                    nums[j-1] = tmp;
                }
                j--;
            }
            if (nums[i]>nums[j]) {
                int tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
            }
            i++;
        }
    }
}

```

- c++


```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int i=0;
        int j = nums.size()-1;

        while (i<nums.size()-1) {
            j = nums.size()-1;

            while (j>i+1) {
                if (nums[j]<nums[j-1]) {
                    int tmp = nums[j];
                    nums[j] = nums[j-1];
                    nums[j-1] = tmp;
                }
                j--;
            }
            if (nums[i]>nums[j]) {
                int tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
            }
            i++;
        }
    }
};
```

时间复杂度：O(n2)

空间复杂度：O(1)
