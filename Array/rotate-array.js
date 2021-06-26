/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const delta = k > nums.length ? k % nums.length : nums.length - k;

    if (k <= nums.length) {
        nums.splice(0, 0, ...nums.splice(delta, k));
    } else {
        nums.splice(delta, 0, ...nums.splice(0, nums.length - delta));
    }
};