/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let max_w = l = numZeros = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) numZeros++

        while (numZeros > k) {
            if (nums[l] === 0) numZeros--
            l++
        }

        max_w = Math.max(max_w , r - l + 1)
    }
    return max_w
};