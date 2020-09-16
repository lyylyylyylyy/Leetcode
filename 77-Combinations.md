---
title: 77-Combinations
date: 2020-09-16 22:12:14
categories: Leetcode
tags:
- javascript
- java
- c++
- array
- backtracking
---

## 问题描述

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

You may return the answer in any order.

 

Example 1:
```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
<!--more-->

Example 2:

```
Input: n = 1, k = 1
Output: [[1]]
```

Constraints:

- 1 <= n <= 20
- 1 <= k <= n


## 解题思路

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (k>n) return [];
    
    var result = [];
    
    
    for (var i=1;i<=n;i++) {
        helper(i,[i]);
    }
    return result;
    
    function helper(idx,arr) {
        if (idx>n) return;
        
        if (arr.length===k) {
            result.push(arr.slice());
        }
        
        for (var j=idx+1;j<=n;j++) {
            helper(j,arr.concat(j));
        }
    }
};
```

```java
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
    
        if (k>n) return result;
        
        for (int i=1;i<=n;i++) {
            List<Integer> arr = new ArrayList<Integer>();
            arr.add(i);
            helper(i,arr,n,k,result);
        }
        
        return result;
    }
    public void helper(int idx, List<Integer> tmp, int n, int k, List<List<Integer>> result) {
        if (idx>n) return;
        
        if (tmp.size()==k) {
            List<Integer> c = new ArrayList<>(tmp);
            result.add(c);
        }
        
        for (int j=idx+1;j<=n;j++) {
            tmp.add(j);
            helper(j,tmp,n,k,result);
            tmp.remove(tmp.size()-1);
        }
    }
}

```

```cpp
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> result;
        if (k>n) return result;
        
        for (int i=1;i<=n;i++) {
            vector<int> arr;
            arr.push_back(i);
            helper(i,arr,n,k,result);
        }
        
        return result;
    }
    
    void helper(int idx, vector<int> tmp, int n, int k, vector<vector<int>> &result) {
        if (idx>n) return;
        
        if (tmp.size()==k) {
            result.push_back(tmp);
        }
        
        for (int j=idx+1;j<=n;j++) {
            tmp.push_back(j);
            helper(j,tmp,n,k,result);
            tmp.pop_back();
        }
    }
};


```

时间复杂度：O()

空间复杂度：O()