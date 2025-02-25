/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = "aeiou";
    let l = count = res = 0;
    for (let r = 0; r < s.length; r++) {
        if (vowels.includes(s[r].toLowerCase())) {
            count++
        }

        if (r - l + 1 > k) {
            if (vowels.includes(s[l].toLowerCase())) {
                count = Math.max(count - 1, 0)
            }
            l++
        }
        res = Math.max(count, res)
    }
    return res
};