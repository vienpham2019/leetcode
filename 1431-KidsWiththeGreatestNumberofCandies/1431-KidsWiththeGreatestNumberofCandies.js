/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = candies[0]
    for(let candy of candies){
        greatest = Math.max(greatest,candy)
    }
    for(let i = 0; i < candies.length; i ++){
        candies[i] = candies[i] + extraCandies >= greatest
    }
    return candies
};