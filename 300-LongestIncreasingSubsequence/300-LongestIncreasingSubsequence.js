/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
    // Step 1: Initialize the result array with the first element of nums.
    // This array will store the smallest possible increasing subsequence.
    let res = [nums[0]];

    // Step 2: Iterate through the nums array, starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // If the current number is greater than the last element in res, append 
        // it.
        if (nums[i] > res[res.length - 1]) {
            res.push(nums[i]);
        } else {
            // Otherwise, replace the first element in res that is greater than 
            // nums[i].
            for (let j = res.length - 1; j >= 0; j--) {
                // If we reached the first element and it's greater than nums[i], 
                // replace it.
                if (j === 0 && res[j] > nums[i]) {
                    res[j] = nums[i];
                    break;
                }
                // If res[j] is greater than nums[i] but res[j - 1] is smaller, 
                // replace res[j].
                else if (res[j] > nums[i] && res[j - 1] < nums[i]) {
                    res[j] = nums[i];
                    break;
                }
            }
        }
    }

    // Step 3: The length of res represents the length of the longest increasing 
    // subsequence.
    return res.length;
};
