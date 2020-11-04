---
title: 239-Sliding-Window-Maximum
categories: Leetcode
tags: 
- Leetcode
- javascript
- array
- deque
comment: true
mathjax: false
date: 2020-11-04 21:34:18
---

## 问题描述

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

<!--more-->

Example 1:
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

Example 2:
```
Input: nums = [1], k = 1
Output: [1]
```

Example 3:
```
Input: nums = [1,-1], k = 1
Output: [1,-1]
```

Example 4:
```
Input: nums = [9,11], k = 2
Output: [11]
```

Example 5:
```
Input: nums = [4,-2], k = 2
Output: [4]
```

Constraints:

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- 1 <= k <= nums.length

## 解题思路



- 代码如下：

- JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var result = new Array();
    var arr = new Array();
    
    var len = nums.length;
    
    for (var i=0; i<len; i++) {
        while (arr.length != 0 && nums[i] >= nums[arr[arr.length-1]]) arr.pop();
        arr.push(i);
        if (i+1 >= k) result.push(nums[arr[0]]);
        if (i+1 >= k + arr[0]) arr.shift();
        // console.log(arr)
    }
    return result;
};
```

```java
public int[] maxSlidingWindow(int[] a, int k) {
	 if (a == null || k <= 0) return new int[0];		 
	 int[] res = new int[a.length - k + 1];
	 ArrayDeque<Integer> deque = new ArrayDeque<Integer>(); 
	 
	 int index  = 0;
	 for (int i = 0; i < a.length; i++) { 
		 while (!deque.isEmpty() && deque.peek() < i - k + 1) // Ensure deque's size doesn't exceed k
			 deque.poll();
		 
		// Remove numbers smaller than a[i] from right(a[i-1]) to left, to make the first number in the deque the largest one in the window		 
		 while (!deque.isEmpty() && a[deque.peekLast()] < a[i]) 
			 deque.pollLast();
		 
		 deque.offer(i);// Offer the current index to the deque's tail
		 
		 if (i >= k - 1)// Starts recording when i is big enough to make the window has k elements 
			 res[index++] = a[deque.peek()];
	 }		 
	 return res;
 }
```

```cpp
class Solution {
public:
  vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> index;
    vector<int> ans;
        
    for (int i = 0; i < nums.size(); ++i) {
      while (!index.empty() && nums[i] >= nums[index.back()]) index.pop_back();
      index.push_back(i);      
      if (i - k + 1 >= 0) ans.push_back(nums[index.front()]);
      if (i - k + 1 >= index.front()) index.pop_front();
    }
    return ans;
  }
};
```

- 时间复杂度：O(n)
- 空间复杂度：O(k)

