---
title: [leetcode]82-Remove-Duplicates-from-Sorted-List-II(JavaScript)
categories: [Leetcode,JavaScript]
tags: [Leetcode,JavaScript]
comment: true
mathjax: false
date: 2020-09-05 22:46:23
---

## 问题描述

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

```
Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
```
<!--more-->

```
Example 2:

Input: 1->1->1->2->3
Output: 2->3
```

## 解题思路

- `head`和`record`两个链表指针，分别为当前节点的前一个节点与当前节点；
- 若是没有遇到重复元素，两个指针均向后前进一步；
- 若是遇到重复元素，进入循环，直到遇到与当前元素不重复的元素，`record`跳到那个不重复的元素；
- 若是遇到过重复元素，`head`指针跳到`record.next`处，否则则正常前进一步。

- 代码如下：

```Java
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
    public ListNode deleteDuplicates(ListNode head) {
        ListNode root = new ListNode(-1);
        ListNode record = new ListNode();
        root.next = head;
        record = head;
        head = root;
        boolean flag = false;
        
        while(record!=null && record.next!=null) {
            while (record.next!=null && record.val == record.next.val) {
                record.next = record.next.next;
                flag = true;
            }
            if (flag) {
                head.next = record.next;
                flag = false;
            } else {
                head = head.next;
            }
            record = record.next;
        }
            return root.next;
    }
}

```

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
var deleteDuplicates = function(head) {
    var root = new ListNode(-1, null);
    var record = new ListNode();
    root.next = head;
    record = head;
    head = root;
    var flag = false;
    console.log(head)
    
    while(record && record.next) {
        while (record.next && record.val === record.next.val) {
            record.next = record.next.next;
            flag = true;
        }
        if (flag) {
            head.next = record.next;
            flag = false;
        } else {
            head = head.next;
        }
        record = record.next;
    }
    return root.next;
};
```
时间复杂度：O(n)
空间复杂度：O(n)

