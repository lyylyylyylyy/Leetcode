---
title: 119-Pascals-Triangle-II
categories: Leetcode
tags: 
- Leetcode
- javascript
- java
- array
comment: true
mathjax: false
date: 2020-10-18 23:00:33
---

## 问题描述

Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.
<!--more-->
![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?

 

Example 1:
```
Input: rowIndex = 3
Output: [1,3,3,1]
```
Example 2:
```
Input: rowIndex = 0
Output: [1]
```
Example 3:
```
Input: rowIndex = 1
Output: [1,1]
```

Constraints:

- 0 <= rowIndex <= 40

## 解题思路

- 用一个数组记录上一个数组，进而通过上一个数组计算得到当前数组

- 代码如下：

- JavaScript

```JavaScript
var getRow = function(rowIndex) {
    var result = [];
    result.push(1);
    
    if (rowIndex == 0) {
        return result;
    }

    if (rowIndex == 1) {
        result.push(1);
        return result;
    }
    
    for (var i = 1; i <= rowIndex; i++) {
        var currentRow = [];
        currentRow.push(1);
        for (var j = 1; j < result.length; j++) {
            currentRow.push(result[j -1] + result[j]);
        }
        currentRow.push(1);
        result = currentRow;
    }
    return result;
};

```

- Java
  
```java
class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> baseRow = new ArrayList<>();
        baseRow.add(1);
        
        if (rowIndex == 0) {
            return baseRow;
        }
        
        if (rowIndex == 1) {
            baseRow.add(1);
            return baseRow;
        }
        
        
        for(int i = 1; i <= rowIndex; i++) {
            List<Integer> currentRow = new ArrayList<>();
            currentRow.add(1);
            for (int j = 1; j < baseRow.size(); j++) {
                currentRow.add(baseRow.get(j -1) + baseRow.get(j));
            }
            currentRow.add(1);
            baseRow = currentRow;
        }
        
        return baseRow;
    }
}
```

- c++

```cpp
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> baseRow;
        baseRow.push_back(1);
        
        if (rowIndex == 0) {
            return baseRow;
        }
        
        if (rowIndex == 1) {
            baseRow.push_back(1);
            return baseRow;
        }
        
        
        for(int i = 1; i <= rowIndex; i++) {
            vector<int> currentRow;
            currentRow.push_back(1);
            for (int j = 1; j < baseRow.size(); j++) {
                currentRow.push_back(baseRow[j -1] + baseRow[j]);
            }
            currentRow.push_back(1);
            baseRow = currentRow;
        }
        
        return baseRow;
    }
};
```


- 时间复杂度：O(n2)
- 空间复杂度：O(k)

