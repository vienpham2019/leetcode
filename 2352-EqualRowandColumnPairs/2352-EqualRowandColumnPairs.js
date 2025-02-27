/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // Store row patterns in a hash map with their frequency.
    // Extract columns and check if they exist in the hash map.
    // Count the occurrences of matching row-column pairs.

    let rowMap = new Map();
    let answer = 0
    for (let row of grid) {
        let key = row.join('-');
        rowMap.set(key, (rowMap.get(key) || 0) + 1);
    }
    for (let r = 0; r < grid.length; r++) {
        let col = ''
        for (let c = 0; c < grid.length; c++) {
            col += grid[c][r] + '-'
        }
        col = col.slice(0, -1) // remove last "-"
        if (rowMap.get(col)) {
            answer += rowMap.get(col)
        }
    }

    return answer
};