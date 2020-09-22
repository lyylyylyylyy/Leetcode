---
title: 90-Subsets-II
date: 2020-09-14 22:32:54
categories: Leetcode
tags:
- javascript
- java
- c++
- array
- backtracking
---

## 问题描述

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.
<!--more-->
Example:

```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
``` 



## 解题思路

- 首先将数组排序，这样便于排除重复元素的情况；
- `subsets`函数进行回溯；
- 在`subsets`中，对数组`i`索引后面的部分进行遍历；
- `nums[j] != nums[j - 1]`排除重复情况，由于排过序，重复元素相邻，若是不排除重复元素，将“相同”元素计算两次，会造成重复；

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => {
        return a-b;
    })
    
    var sub = [];
    var subs = [];
    subsets(nums, 0, sub, subs);
    return subs;
    
    function subsets(nums, i, sub, subs) {
        subs.push(sub.slice());
        console.log(subs)
        for (var j = i; j < nums.length; j++) {
            if (j === i || nums[j] !== nums[j - 1]) {
                sub.push(nums[j]);
                subsets(nums, j + 1, sub, subs);
                sub.pop();
            }
        }
    }
};

```

```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> subs = new ArrayList<>();
        List<Integer> sub = new ArrayList<>();
        subsets(nums, 0, sub, subs);
        return subs;
    }
    void subsets(int[] nums, int i, List<Integer> sub, List<List<Integer>> subs) {
        List<Integer> c = new ArrayList<>(sub);
        subs.add(c);
        for (int j = i; j < nums.length; j++) {
            if (j == i || nums[j] != nums[j - 1]) {
                sub.add(nums[j]);
                subsets(nums, j + 1, sub, subs);
                sub.remove(sub.size()-1);
            }
        }
    }
}

```

```cpp
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> subs;
        vector<int> sub;
        subsets(nums, 0, sub, subs);
        return subs;
    }
private:
    void subsets(vector<int>& nums, int i, vector<int>& sub, vector<vector<int>>& subs) {
        subs.push_back(sub);
        for (int j = i; j < nums.size(); j++) {
            if (j == i || nums[j] != nums[j - 1]) {
                sub.push_back(nums[j]);
                subsets(nums, j + 1, sub, subs);
                sub.pop_back();
            }
        }
    }
};
```

时间复杂度：O(n2)

空间复杂度：O(n2)