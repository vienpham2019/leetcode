/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    // Function to find the GCD of two numbers
    // GCD is Greatest Common Divisor Logic
    function gcd(len1, len2) {
        return len2 === 0 ? len1 : gcd(len2, len1 % len2);
    }

    // If str1 + str2 is not equal to str2 + str1, there's no common divisor
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Find the greatest common divisor of the lengths of the strings
    const gcdLength = gcd(str1.length, str2.length);
    
    // The common divisor string is the substring of str1 with length gcdLength
    return str1.slice(0, gcdLength);
};