---
title: 299-Bulls-and-Cows
categories: Leetcode
tags: 
- Leetcode
- javascript
- c++
- hash
comment: true
mathjax: false
date: 2020-10-14 00:07:26
---

## 问题描述

You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
<!--more-->

The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

 

Example 1:

```
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
```

Example 2:

```
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
```

Example 3:

```
Input: secret = "1", guess = "0"
Output: "0A0B"
```

Example 4:

```
Input: secret = "1", guess = "1"
Output: "1A0B"
```

Constraints:

- 1 <= secret.length, guess.length <= 1000
- secret.length == guess.length
- secret and guess consist of digits only.

## 解题思路

- 两个hash表，key为字符串，value为出现的次数，分别记录secret和guess 的字符串情况；
- 若是同一位置，secret和guess的字符相等，则bull增加，否则用secMap和gusMap记录字符出现的次数；
- 遍历gusMap寻找cow，若是gusMap的key可以在secMap中找到，则`cow += Math.min(g, value);`


- 代码如下：

- JavaScript

```JavaScript
var getHint = function(secret, guess) {
    let i = 0,
        bull = 0,
        cow = 0,
        secMap = new Map(),
        gusMap = new Map();
    
    while(i < secret.length){
        if (secret[i] == guess[i]){
            bull++;
        } else {
            let s = secMap.get(secret[i]) ? secMap.get(secret[i]) +1 : 1;
            let g = gusMap.get(guess[i]) ? gusMap.get(guess[i]) +1 : 1;
            secMap.set(secret[i], s);
            gusMap.set(guess[i], g);
        }
        console.log(secMap)
        console.log(gusMap)
        i++
    }
    
    for (let [key, value] of gusMap){
        let g = secMap.get(key) || 0
        cow += Math.min(g, value);
    }
    
    return `${bull}A${cow}B`;
};

```

- Java
  
```java
class Solution {
    public String getHint(String secret, String guess) {
        int a=0;
		int b=0;
		Map<Character, Integer> secretChars = new HashMap<Character, Integer>();
		for (char c:secret.toCharArray())
			if (secretChars.containsKey(c))
				secretChars.put(c, secretChars.get(c)+1);
			else
				secretChars.put(c, 1);
				
		for (int i=0;i<guess.length();i++){
			char c = guess.charAt(i);
			if (c == secret.charAt(i)){
				a++;
				Integer newVal = secretChars.get(c)-1;
				if (newVal == 0)
					secretChars.remove(c);
				else
					secretChars.put(c, newVal);
			}
		}
		for (int i=0;i<guess.length();i++){
			char c = guess.charAt(i);
			if (c != secret.charAt(i)){
				Integer val = secretChars.get(c);
				if (val!=null){
					b++;
					Integer newVal = val-1;
					if (newVal == 0)
						secretChars.remove(c);
					else
						secretChars.put(c, newVal);
				}
			}
		}
		return a+"A"+b+"B";
    }
}
```

- c++

```cpp
class Solution {
public:
    string getHint(string secret, string guess) {
        int bulls = 0, cows = 0;
        unordered_map<char, int> secrets, guesses;
        for (int i = 0; i < secret.length(); i++) {
            if (secret[i] == guess[i])
                bulls++;
            else {
                secrets[secret[i]]++;
                guesses[guess[i]]++;
            }
        }
        for (auto it : secrets)
            if (guesses.count(it.first) > 0)
                cows += min(it.second, guesses[it.first]);
        return to_string(bulls) + "A" + to_string(cows) + "B";
    }
};
```


- 时间复杂度：O(n)
- 空间复杂度：O(n)

