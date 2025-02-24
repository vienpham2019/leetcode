/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = right = 1;
    for(let i = 1; i < nums.length ; i ++ ){
        // check if current number is diffrent than prev number we see unique  
        if(nums[i] !== nums[i - 1]){
            // update number at left poiner number to current number value
            nums[left] = nums[i]
            // increase left pointer 
            left ++ 
        }
    }
    // return how many unique number the last postition 
    return left 
};