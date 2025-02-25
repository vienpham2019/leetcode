/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if(len1 === len2 && str1 !== str2) return ""
    let isDivision = (l) => {
        if (len1 % l !== 0 && len2 % l !== 0) return false;
        return (
             str1.slice(0, l) === str2.slice(0, l) &&
            str1 === str1.slice(0, l).repeat(len1 / l) &&
            str2 === str2.slice(0, l).repeat(len2 / l)
        );
    };
    for (let i = Math.min(len1, len2); i > 0; i--) {
        if (isDivision(i)) {
            return str1.slice(0, i);
        }
    }
    return "";
};