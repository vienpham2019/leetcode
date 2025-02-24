/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let remain = 0;
    for(let i = digits.length - 1; i >= 0; i --){
          // add one to the last element of digits 
        digits[i]+= 1
        // if it greater than 9 set it 0 and remain 1 
        if(digits[i] > 9){
            digits[i] = 0 
            remain = 1
        }else {
            return digits 
        }
    }
    // if remain not 0 than push that to fist element 
    if(remain > 0){
        digits.unshift(remain)
        return digits
    }
};