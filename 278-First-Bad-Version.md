---
title: 278-First-Bad-Version
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- array
comment: true
mathjax: false
date: 2020-10-31 22:15:43
---

## 问题描述

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
<!--more-->
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:
```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

Example 2:

```
Input: n = 1, bad = 1
Output: 1
```

Constraints:

- 1 <= bad <= n <= 231 - 1

## 解题思路

- 二分法

- 代码如下：

- JavaScript

```JavaScript
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1;
        var right = n;
        while (left <= right) {
            var middle = left + Math.floor((right - left)/2);
            if(isBadVersion(middle)){
                if ((middle-1 > 0 && !isBadVersion(middle-1)) || (middle === 1)){
                    return middle;
                } else{
                    right = middle - 1;
                }
            } else{
                left = middle + 1;
            };
        }
        return -1;
    };
};

```

- Java
  
```java
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int left = 1;
        int right = n;
        while (left <= right) {
            int middle = left + ((right - left)/2);
            if(isBadVersion(middle)){
                if ((middle-1 > 0 && !isBadVersion(middle-1)) || (middle == 1)){
                    return middle;
                } else{
                    right = middle - 1;
                }
            } else{
                left = middle + 1;
            };
        }
        return -1;
    }
}
```

- c++

```cpp
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int left = 1;
        int right = n;
        while (left <= right) {
            int middle = left + ((right - left)/2);
            if(isBadVersion(middle)){
                if ((middle-1 > 0 && !isBadVersion(middle-1)) || (middle == 1)){
                    return middle;
                } else{
                    right = middle - 1;
                }
            } else{
                left = middle + 1;
            };
        }
        return -1;
    }
};
```


- 时间复杂度：O(nlog(n))
- 空间复杂度：O(1)

