/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']); 
    let l = count = res = 0;
    for (let r = 0; r < s.length; r++) {
        if (vowels.has(s[r])) {
            count++
        }

        if (r - l + 1 > k) {
            if (vowels.has(s[l])) {
                count = Math.max(count - 1, 0)
            }
            l++
        }
        res = Math.max(count, res)
    }
    return res
};