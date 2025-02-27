/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // go through each row and count them up 
    // go through each column if found one than add number count in row and 1
    // to answer 

    let count = {}
    let answer = 0
    for (let row of grid) {
        count[row.join('-')] = count[row.join('-')] + 1 || 1;
    }
    for (let r = 0; r < grid.length; r++) {
        let col = ''
        for (let c = 0; c < grid.length; c++) {
            col += grid[c][r] + '-'
        }
        col = col.slice(0, -1) // remove last "-"
        if (count[col]) {
            answer += count[col]
        }
    }

    return answer
};