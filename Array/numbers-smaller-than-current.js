var smallerNumbersThanCurrent = function (nums) {
    //  created a sorted copy of the array
    const sortedNums = [...nums].sort((a, b) => a - b);

    // create result array by looking for the first index of a number from original array
    // the index in sorted array equal how many numbers are present in the array before the current
    // when duplicate numbers exists, indexOf() returns the first match for all hence provides 
    // the first unique number
    const result = nums.map(item => sortedNums.indexOf(item));

    return result;
};