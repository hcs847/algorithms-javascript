// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non-overlapping 
// intervals that cover all the intervals in the input.
var merge = function (intervals) {
    intervals.sort((a, b) => (a[0] - b[0]));
    const newIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const end = newIntervals.length - 1;
        const currInt = newIntervals[end];
        const nextInt = intervals[i];
        if (currInt[1] >= nextInt[0]) {
            // check for max value for interval end due to array of interval
            // being sorted based on interval start value
            newIntervals[end] = [currInt[0], Math.max(nextInt[1], currInt[1])];
        } else {
            newIntervals.push(nextInt);
        }
    }
    return newIntervals;
};