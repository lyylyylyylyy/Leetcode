/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (32.67%)
 * Likes:    1454
 * Dislikes: 669
 * Total Accepted:    259.1K
 * Total Submissions: 792.8K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1==='0' || num2==='0') return "0";
    
    var res = '';
    var n1 = num1.length;
    var n2 = num2.length;
    var arr = new Array(n1+n2).fill(0);
    
    var k = n1+n2-1;
    var tmp = 0;
    
    for(var i=0;i<n1;i++){
        for(var j=0;j<n2;j++){
            arr[k-i-j] = arr[k-i-j]+(num1[n1-1-i]-'0')*(num2[n2-1-j]-'0')
        }
    }
    
    for(var idx=k;idx>=0;idx--){
        arr[idx] = arr[idx]+tmp;
        tmp = Math.floor(arr[idx]/10);
        arr[idx] = arr[idx]%10;
    }
    
    var index = 0;
    while(arr[index]===0){
        index++;
    }
    
    for(;index<arr.length;index++){
        res = res + arr[index].toString();
        //console.log(arr[index]+'0')
    }
    
    return res;
};
// @lc code=end

