/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = {}; 
    for(let num of nums){
        count[num] = count[num] + 1 || 1; 
    }
    for( key in count){
        if(count[key] === 1) return key - 0 
    }
};