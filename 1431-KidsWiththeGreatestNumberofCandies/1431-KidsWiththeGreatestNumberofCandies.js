/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // Step 1: Find the maximum number of candies a kid currently has
    const maxCandies = Math.max(...candies);

    // Step 2: Iterate over each kid and check if they can have the 
    // greatest number of candies
    return candies.map(candy => candy + extraCandies >= maxCandies);
};