/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity; 
    let maxPro = 0 
    for(let currentPrice of prices){
        if(minPrice > currentPrice){
            minPrice = currentPrice
        }else if(maxPro < currentPrice -minPrice){
            maxPro = currentPrice -minPrice
        }
    }
    return maxPro
};