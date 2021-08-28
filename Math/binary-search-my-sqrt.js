// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, 
// and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

var mySqrt = function (x) {
    if (x < 2) return x;
    let mid, left = 2;
    // for x > 2 sqr is greater than x / 2
    let right = Math.floor(x / 2);

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    // returned number is truncated hence if the iteration before last is larger
    // ther answer is the last condition hence right
    // if the iteration before last is smaller it will still be right since it's inbetween
    //left and right and it will be rounded down to right.
    return right;
};