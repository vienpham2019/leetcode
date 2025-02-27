/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    // Iterate through s character by character.
    // If the character is a normal letter, push it onto the stack.
    // If the character is *, remove the last character from the stack (pop()).
    // Finally, return the joined stack as the result.
    let stack = []
    for (let char of s) {
        if (char === "*") {
            stack.pop(); // Remove the last added character
        } else {
            stack.push(char); // Add character to the stack
        }
    }
    return stack.join(""); // Convert the stack back to a string
};