/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let l = 0;
    let r = s.length - 1
    s = s.split('')
    // Convert the character to lowercase and check if it's a vowel
    const vowels = "aeiou";
    while (r > l) {
        while (r > l && !vowels.includes(s[l].toLowerCase())) {
            l++
        }
        while (r > l && !vowels.includes(s[r].toLowerCase())) {
            r--
        }
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
    return s.join('')
};