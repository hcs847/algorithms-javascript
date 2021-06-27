/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let bitArray = n.toString(2).padStart(32, '0').split('');

    for (let i = 0; i < 16; i++) {
        [bitArray[i], bitArray[31 - i]] = [bitArray[31 - i], bitArray[i]];
    }

    return parseInt(bitArray.join(''), 2);
};