---
title: 141-Linked-List-Cycle
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- java
- array
- two pointers
comment: true
mathjax: false
date: 2020-09-22 22:56:35
---

## [问题描述](https://leetcode.com/problems/linked-list-cycle/)

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
<!--more-->
Follow up:

Can you solve it using O(1) (i.e. constant) memory?

 
```
Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```
```
Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

```
Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

Constraints:

- The number of the nodes in the list is in the range [0, 104].
- -105 <= Node.val <= 105
- pos is -1 or a valid index in the linked-list.


## 解题思路

- 两个指针，快指针和慢指针；
- 快指针每次走两步，慢指针每次走1步；
- 若是有循环，则两个指针会在循环节点处相遇。

- 代码如下：

- JavaScript

```JavaScript
var hasCycle = function(head) {
    var slow = new ListNode(0);
    var fast = new ListNode(0);
    
    slow = head;
    fast = head;
    
    while (fast!==null && fast.next!==null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};

```

- Java
  
```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = new ListNode(0);
        ListNode fast = new ListNode(0);

        slow = head;
        fast = head;

        while (fast!=null && fast.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
}
```

- c++

```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *slow = new ListNode(0);
        ListNode *fast = new ListNode(0);

        slow = head;
        fast = head;

        while (fast!=NULL && fast->next!=NULL) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

