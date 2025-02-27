/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // Found pivot index
        }
        leftSum += nums[i]; // Update left sum
    }

    return -1; // No pivot index found
};