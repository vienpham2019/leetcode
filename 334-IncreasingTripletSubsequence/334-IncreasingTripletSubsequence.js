/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity
    let second = Infinity
    for(let num of nums){
        if(first > num){
            first = num 
        }else if(num > first && num < second){
            second = num
        }else if(num > first && num > second){
            return true 
        }
    }
    return false 
};