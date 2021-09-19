// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

var intersection = function (nums1, nums2) {
    const nums1Obj = {};
    let result = [];

    for (let num of nums1) {
        if (!nums1Obj[num]) {
            nums1Obj[num] = 1;
        }
    }

    for (let num of nums2) {
        if (nums1Obj[num]) {
            result.push(num);
            nums1Obj[num] = 0;
        }
    }
    return result;
};