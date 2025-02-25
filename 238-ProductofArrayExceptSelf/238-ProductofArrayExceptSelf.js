/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length)
    res[0] = 1
    let preFix = 1 
    for(let i = 0; i < nums.length - 1 ; i ++){
        res[i + 1] = preFix * nums[i]
        preFix *= nums[i]
    }
    let posFix = 1 
    for(let i = nums.length - 1; i >= 0 ; i --){
        res[i] *= posFix
        posFix *= nums[i]
    }
    return res
};