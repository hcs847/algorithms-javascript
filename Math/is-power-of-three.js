var isPowerOfThree = function (n) {
    if (n <= 0) {
        return false;
    } else {
        return !((Math.log(n) / Math.log(3)).toFixed(10) % 1);
    }
};