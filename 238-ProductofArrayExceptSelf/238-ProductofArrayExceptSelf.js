/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Step 1: Create a result array with the same length as nums, 
    // initialized to zeros
    let res = new Array(nums.length);

    // Step 2: Initialize the first element of the result array to 1
    res[0] = 1;

    // Step 3: Compute the prefix product (left product)
    let preFix = 1; // Initialize prefix product to 1
    for (let i = 0; i < nums.length - 1; i++) {
        // Multiply the current prefix product with the current element in nums
        res[i + 1] = preFix * nums[i];
        // Update the prefix product by multiplying it with the current 
        // element in nums
        preFix *= nums[i];
    }

    // Step 4: Compute the postfix product (right product)
    let posFix = 1; // Initialize postfix product to 1
    for (let i = nums.length - 1; i >= 0; i--) {
        // Multiply the current result by the postfix product
        res[i] *= posFix;
        // Update the postfix product by multiplying it with the current
        // element in nums
        posFix *= nums[i];
    }

    // Step 5: Return the result array
    return res;
};
