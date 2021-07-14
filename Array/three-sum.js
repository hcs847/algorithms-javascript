var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    // initialize an empty set to ensure no duplicate results
    let result = new Set();

    // extract indices that smaller or equal to zero (target sum)
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        // extract indices from the beginning or that are not duplicate (not to extract twice)
        if (i === 0 || nums[i - 1] !== nums[i]) {
            //run the auxiliary function
            twoSumAux(nums, i, result);
        }
    }
    // convert set to an array as per return requirements
    return [...result];
}

const twoSumAux = (arr, index, result) => {
    // check the following index
    let low = index + 1;
    // and the last index of the array
    let high = arr.length - 1;
    // as long as the 2 pointers do not collide
    while (low < high) {
        // sum the starting plus 2 selected items
        let sum = arr[index] + arr[low] + arr[high];
        // if sum too low, advance the left pointer
        if (sum < 0) {
            low++;
            // if sum too high, reduce the right (ending) pointer
        } else if (sum > 0) {
            high--;
            // if the sum is correct
        } else {
            // add it to the set and advance the 2 pointers for the next run
            result.add([arr[index], arr[low++], arr[high--]]);
            // if the last 2 or first 2 numbers are duplicates
            // duplicate triplets will be produced from this while loop
            // to prevent duplicate triplet after moving the low and high pointers
            // advance the low index
            while (low < high && arr[low] === arr[low - 1]) {
                low++;
            }
        }
    }
};
