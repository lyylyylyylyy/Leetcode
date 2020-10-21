---
title: 274-H-Index
categories: Leetcode
tags: 
- Leetcode
- javascript
- java
- sort
- hash table
comment: true
mathjax: false
date: 2020-10-21 17:11:42
---

## 问题描述

Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."
<!--more-->
Example:

```
Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.
```

Note: If there are several possible values for h, the maximum one is taken as the h-index.

## 解题思路

-  先将数组排序，然后对于每个引用次数，比较大于该引用次数的文章，取引用次数和文章数的最小值，即 Math.min(citations.length-i, citations[i])，并更新 result，取最大值。

--------------------------------------------------------

代码如下：

- JavaScript

```JavaScript
var hIndex = function(citations) {
    var len = citations.length;
    var result = 0;

    if (len == 0) return 0;
    if (len === 1) {
        return citations[0] === 0 ? 0 : 1;
    }
    
    citations.sort(function(a, b) {
      return a - b;
    });
    
    console.log(citations)
    for (var i=0; i < len; i++) {
        result = Math.max(result, Math.min(len-i, citations[i]));
    }
    return result;
};

```

- Java
  
```java
class Solution {
    public int hIndex(int[] citations) {
        int len = citations.length;
        int result = 0;

        if (len == 0) return 0;
        if (len == 1) {
            return citations[0] == 0 ? 0 : 1;
        }

        Arrays.sort(citations); 

        for (int i=0; i < len; i++) {
            result = Math.max(result, Math.min(len-i, citations[i]));
        }
        return result;
    }
}
```

- c++

```cpp
class Solution {
public:
    int hIndex(vector<int>& citations) {
        int len = citations.size();
        int result = 0;

        if (len == 0) return 0;
        if (len == 1) {
            return citations[0] == 0 ? 0 : 1;
        }

        sort(citations.begin(), citations.end()); 

        for (int i=0; i < len; i++) {
            result = max(result, min(len-i, citations[i]));
        }
        return result;
    }
};
```


- 时间复杂度：O(nlogn)
- 空间复杂度：O(1)

