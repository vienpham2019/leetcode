/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    // Stores the maximum window size of consecutive 1s (including 
    //k flips)
    let max_w = 0; 
    let l = 0; // Left pointer of the sliding window
    let numZeros = 0; // Counts the number of zeros in the current window

    // Iterate through the array with the right pointer 'r'
    for (let r = 0; r < nums.length; r++) {
        // If the current element is 0, increase the zero count
        if (nums[r] === 0) numZeros++;

       // Only move 'l' when there are more than 'k' zeros in the window
        if (numZeros > k) {
            if (nums[l] === 0) numZeros--;
            l++;
        }

        // Update the maximum window size
        max_w = Math.max(max_w, r - l + 1);
    }

    // Return the maximum number of consecutive 1s that can be obtained by 
    // flipping at most k zeros
    return max_w;
};
