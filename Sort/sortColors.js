// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function (nums) {
    const numObj = {};

    for (let num of nums) {
        numObj[num] = numObj[num] + 1 || 1;
    };

    const zeroNums = numObj[0] ? new Array(numObj[0]).fill(0) : '';
    const oneNums = numObj[1] ? new Array(numObj[1]).fill(1) : '';
    const twoNums = numObj[2] ? new Array(numObj[2]).fill(2) : '';

    nums.splice(0, nums.length, ...zeroNums, ...oneNums, ...twoNums);
};