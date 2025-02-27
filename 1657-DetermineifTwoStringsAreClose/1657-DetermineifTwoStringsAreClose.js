/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    // length of 2 word need to be the same 
    // Both words must have the same unique characters
    // The frequency distribution of characters must match
    if (word1.length !== word2.length) return false

    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for (let char of word1) freq1[char.charCodeAt(0) - 97]++;
    for (let char of word2) freq2[char.charCodeAt(0) - 97]++;

    // Check if both words have the same unique characters
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] > 0) !== (freq2[i] > 0)) return false;
    }
    // Compare sorted frequency values
    return freq1.sort().join('') === freq2.sort().join('');
};