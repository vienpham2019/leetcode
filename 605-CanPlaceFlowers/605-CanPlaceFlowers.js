/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if(n === 0) return true
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty and not adjacent to other flowers
        if (flowerbed[i] === 0 &&
                (i === 0 || flowerbed[i - 1] === 0) && // Check the previous plot
                (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                // Check the next plot
                flowerbed[i] = 1; // Plant a flower
                n--; 
                // If we have planted enough flowers, return true
                if (n === 0) {
                    return true;
                }
            }
    }
    return false
};