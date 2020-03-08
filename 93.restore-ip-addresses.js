/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (33.72%)
 * Likes:    975
 * Dislikes: 441
 * Total Accepted:    171.7K
 * Total Submissions: 508K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var n = s.length;
    var result = [];
    
    ip(0,[]);
    
    return result;
    
    function ip(idx,current){
        if(current.length === 4 && idx=== s.length){
            
            result.push(current.join('.'));
            return;
        }
        if (current.length === 4 || idx === s.length) return;
        
        for(var i=idx;i<s.length;i++){
            if (i !== idx && s[idx] === '0') return;
            
            const num = parseInt(s.slice(idx,i+1));
            
            if(num > 255) return;
            current.push(num);
            ip(i+1,current);
            current.pop()
        }
        
        
    }
};
// @lc code=end

