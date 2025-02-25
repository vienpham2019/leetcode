/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
   const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // Faster lookup
    let count = 0, res = 0;

    // Initialize the first window of size k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    res = count; // Store the initial max vowel count

    // Slide the window across the string
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;   // Add new character
        if (vowels.has(s[i - k])) count--; // Remove outgoing character
        res = Math.max(res, count); // Update max vowel count
    }

    return res;
};