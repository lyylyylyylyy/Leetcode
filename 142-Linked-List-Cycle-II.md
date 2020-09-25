---
title: 142-Linked-List-Cycle-II
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
date: 2020-09-25 22:31:31
---

## 问题描述

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

 
```
Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```
<!--more-->
```
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```
```
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

Constraints:

- The number of the nodes in the list is in the range [0, 104].
- -105 <= Node.val <= 105
- pos is -1 or a valid index in the linked-list.


## 解题思路

- 两个指针，快指针和慢指针；
- 快指针每次走两步，慢指针每次走1步；
- 若是有循环，则两个指针会在某节点处相遇；
- 然后，slow在此节点处，fast指向head；
- 之后再次进行循环，此时两个指针每次都走1步，最终两个指针会在循环节点处相遇。


- 代码如下：

- JavaScript

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next || !head.next.next) return null;
    var slow = new ListNode(0);
    var fast = new ListNode(0);
    
    slow = head.next;
    fast = head.next.next;
    
    while (slow !== fast) {
        slow = slow.next;
        if (fast.next==null || fast.next.next==null) return null;
        fast = fast.next.next;
    }
    fast = head;
    
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow;
};

```

- Java
  
```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        if (head==null || head.next==null || head.next.next==null) return null;
        ListNode slow = new ListNode(0);
        ListNode fast = new ListNode(0);

        slow = head.next;
        fast = head.next.next;

        while (slow != fast) {
            slow = slow.next;
            if (fast.next==null || fast.next.next==null) return null;
            fast = fast.next.next;
        }
        fast = head;

        while (fast != slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    }
}
```

- c++

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (head==NULL || head->next==NULL || head->next->next==NULL) return NULL;
        ListNode* slow = new ListNode(0);
        ListNode* fast = new ListNode(0);

        slow = head->next;
        fast = head->next->next;

        while (slow != fast) {
            slow = slow->next;
            if (fast->next==NULL || fast->next->next==NULL) return NULL;
            fast = fast->next->next;
        }
        fast = head;

        while (fast != slow) {
            fast = fast->next;
            slow = slow->next;
        }
        return slow;
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(1)

