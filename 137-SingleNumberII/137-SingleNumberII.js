/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length === 1) return nums[0]
    nums = nums.sort();
    if (nums[1] !== nums[0]) return nums[0]
    if (nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1]
    for (let i = 1; i < nums.length; i += 3) {
        if (nums[i] !== nums[i - 1]) return nums[i - 1]
        else if (nums[i] !== nums[i + 1]) return nums[i + 1]
    }
};