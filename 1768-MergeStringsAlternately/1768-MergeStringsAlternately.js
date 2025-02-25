/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let res = ''
    while (word1.length) {
        res += word1[0]
        word1 = word1.slice(1)
        if (word2.length) {
            res += word2[0]
            word2 = word2.slice(1)
        } else {
            res += word1
            break
        }
    }
    if (word2.length) {
        res += word2
    }
    return res
};