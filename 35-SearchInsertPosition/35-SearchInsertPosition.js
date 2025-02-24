/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let k = 0; 
    for(let num of nums){
        if(num >= target){
            return k
        }
        k++
    }
    return k
};