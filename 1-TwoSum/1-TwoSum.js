/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let remain = {};
    for (let i = 0; i < nums.length; i++) {
        if (remain[target - nums[i]] != undefined) {
            return [remain[target - nums[i]], i];
        }
        remain[nums[i]] = i;
    }
};