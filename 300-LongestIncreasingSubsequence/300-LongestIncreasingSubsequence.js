/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let res = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > res[res.length - 1]) {
            res.push(nums[i])
        } else {
            for (let j = res.length - 1; j >= 0; j--) {
                if(j === 0 && res[j] > nums[i]){
                    res[j] = nums[i]
                    break
                }else if(res[j] > nums[i] && res[j - 1] < nums[i]){
                    res[j] = nums[i]
                    break
                }
            }
        }
    }
    return res.length
};