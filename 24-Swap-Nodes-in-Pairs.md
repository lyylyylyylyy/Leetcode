---
title: 24.Swap-Nodes-in-Pairs
date: 2020-08-31 22:32:05
tags: Leetcode-Javascript-Java
---

## 问题描述

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

```
Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
```
<!--more-->
## 解题思路

- 直接交换链表中的节点，同时更新头节点


```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newHead = new ListNode(0);
    newHead.next = head;
    
    let slow = newHead;
    let fast, prev;
    
    while (slow.next && slow.next.next) {
        prev = slow;
        slow = slow.next;
        fast = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        prev.next = fast;
    }
    
    return newHead.next;
};
```

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode newHead = new ListNode(0);
        newHead.next = head;

        ListNode slow = newHead;
        ListNode fast;
        ListNode prev;

        while (slow.next != null && slow.next.next != null) {
            prev = slow;
            slow = slow.next;
            fast = slow.next;

            slow.next = fast.next;
            fast.next = slow;
            prev.next = fast;
        }

        return newHead.next;
    }
}
```

时间复杂度：O(n)
空间复杂度：O(n)

