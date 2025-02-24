/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]]; 
    while(numRows > res.length){
        let temp = [1]
        if(res.length > 1){
            let prevRes = res[res.length - 1]
            for(let i = 0 ; i < prevRes.length - 1 ; i ++){
                temp.push(prevRes[i] + prevRes[i + 1])
            }
        }
        temp.push(1)
        res.push(temp)
    }
    return res 
};