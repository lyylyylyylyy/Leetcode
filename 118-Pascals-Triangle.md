---
title: 118-Pascals-Triangle
categories: Leetcode
tags: 
- Leetcode
- javascript
- java
- array
comment: true
mathjax: false
date: 2020-10-16 23:26:11
---

## 问题描述

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
<!--more-->

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## 解题思路

- 解题思路同Pascal's triangle的规则即可。

- 代码如下：

- JavaScript

```JavaScript
var generate = function(numRows) {
    var result = [];
    var arr = [];
    if (numRows === 0) return result;
    if (numRows === 1) {
        result.push([1]);
        return result
    };
    
    if (numRows === 2) {
        result.push([1]);
        result.push([1,1]);
        return result
    };
    
    if (numRows > 2) {
        result.push([1]);
        result.push([1,1]);
    };
    // console.log(result)
    for (var i = 2; i < numRows; i++) {
        arr.push(1);
        for (var j = 1; j < i; j++) {
            arr.push(result[i-1][j-1] + result[i-1][j]);
        }
        arr.push(1);
        result.push(arr);
        arr = [];
    }
    return result;
};
```

- Java
  
```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        
        for (int i = 0; i < numRows; i++) {
            List<Integer> list = new ArrayList<Integer>(Arrays.asList(1));
            
            for (int j = 1; j < i; j++) 
                list.add(res.get(i - 1).get(j - 1) + res.get(i - 1).get(j));
                
            if (i > 0) list.add(1);
            
            res.add(list);
        }
        
        return res;
    }
}
```

- c++

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> res;
        for(auto i=0;i<numRows;++i)
        {
            res.push_back(vector<int>(i+1,1));
            for(auto j=1; j<i; ++j) res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
        return res;
    }
};
```


- 时间复杂度：O(n2)
- 空间复杂度：O(n2)

