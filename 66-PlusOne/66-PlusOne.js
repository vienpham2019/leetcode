/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (n === 0) return nums1
    m--; n--
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (m < 0 || nums2[n] > nums1[m]) {
            nums1[i] = nums2[n--]
        } else {
            nums1[i] = nums1[m--]
        }
        if (n < 0) {
            return nums1
        }
    }
    return nums1
};