---
title: 189-Rotate-Array
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- array
comment: true
mathjax: false
date: 2020-10-12 21:17:41
---

## 问题描述

Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 
<!--more-->
Example 1:

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

Example 2:

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

Constraints:

```
1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
```

## 解题思路

- rotate一次的操作实际是，数组整体后移一位，然后最后一位放到0位处；
- 所以，record记录最后一位，数组依次后移，最后将record放在nums[0]位置处；
- 上述操作执行k次即可得到正确结果。


- 代码如下：

- JavaScript

```JavaScript
var rotate = function(nums, k) {
    var record = 0;
    var len = nums.length;
    
    while(k > 0) {
        record = nums[len-1];
        
        for (var i = len - 2; i >= 0; i--) {
            nums[i+1] = nums[i];
        }
        nums[0] = record;
        k--;
    }
    return nums;
};
```

- Java
  
```java
class Solution {
    public void rotate(int[] nums, int k) {
        int record = 0;
        int len = nums.length;

        while(k > 0) {
            record = nums[len-1];

            for (int i = len - 2; i >= 0; i--) {
                nums[i+1] = nums[i];
            }
            nums[0] = record;
            k--;
        }
    }
}
```

- C++

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int record = 0;
        int len = nums.size();

        while(k > 0) {
            record = nums[len-1];

            for (int i = len - 2; i >= 0; i--) {
                nums[i+1] = nums[i];
            }
            nums[0] = record;
            k--;
        }
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

