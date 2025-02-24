/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let res = 0; 
    let stack = []; 
    for(let i = 0; i < operations.length ; i ++){
        let op = operations[i]
        if(op === "D"){
            stack.push(stack[stack.length -1] * 2)
           res += stack[stack.length -1]
        }else if(op === "C"){
           res -= stack.pop() 
        }else if(op === "+"){
            let sum = stack[stack.length -1] + stack[stack.length - 2]
           res += sum
           stack.push(sum)
        }else{
            stack.push(op - 0)
            res += op - 0
        }
    }

    return res
};