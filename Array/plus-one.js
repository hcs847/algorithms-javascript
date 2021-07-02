/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let last = digits.pop();
    if (last < 9) {
        digits.push(last + 1);
        return digits;
    }
    if (!digits.length) return [1, 0, ...digits];
    return [...plusOne(digits), 0];
};