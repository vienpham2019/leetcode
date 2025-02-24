/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0; 
    for(let num of nums){
        // 1 xor 1 == 0 so it cancel out 
        // 1 xor 0 === 1 
        // 4 in binary is 100
        // 1 in binary is 001 
        // if 4 xor 1 is 101 is 5 
        // if get 5 xor 1 is 100 equal 4 because the last 1 is cancle out become 0
        // 2 in binary is 010
        // 4 xor 2 is 110 is 6 
        // 110 xor 010 is 100 is 4 
        res ^= num
    }
   return res 
};