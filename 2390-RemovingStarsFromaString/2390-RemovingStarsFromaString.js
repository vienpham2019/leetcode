/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // using stack to store
    // loop through string if that character is * then pop stack 
    // else add to stack 
    let stack = []
    for(let char of s){
        if(char === '*'){
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return stack.join('')
};