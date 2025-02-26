/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max_w = l = zeroCounts = 0; 
    for(let r = 0; r < nums.length ; r++){
        if(nums[r] === 0) zeroCounts++
        
        if(zeroCounts > 1){
            if(nums[l] === 0) zeroCounts--
            l++
        }
        max_w = Math.max(max_w, r - l)
    }
    return max_w
};