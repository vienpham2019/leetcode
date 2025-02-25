/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // Define a string containing all vowels
    const vowels = "aeiou";
    
    // Initialize two pointers: one at the start of the string and one at the end
    let l = 0, r = s.length - 1;
    
    // Convert the string to an array so we can modify it
    s = s.split('');
    
    // Loop until the left pointer is less than the right pointer
    while (l < r) {
        // Move the left pointer forward if it's not a vowel
        if (!vowels.includes(s[l].toLowerCase())) {
            l++;
        }
        // Move the right pointer backward if it's not a vowel
        else if (!vowels.includes(s[r].toLowerCase())) {
            r--;
        }
        // If both characters are vowels, swap them
        else {
            [s[l], s[r]] = [s[r], s[l]];  // Swap vowels
            l++;  // Move the left pointer forward
            r--;  // Move the right pointer backward
        }
    }
    
    // Join the array back into a string and return it
    return s.join('');
};
