// Given two non-negative integers, num1 and num2 represented as string, 
// return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
// You must also not convert the inputs to integers directly.

var addStrings = function (num1, num2) {
    let result = '';

    let length1 = num1.length - 1;
    let length2 = num2.length - 1;
    let carry = 0;

    while (length1 >= 0 || length2 >= 0) {
        let x1 = length1 >= 0 ? Number(num1[length1]) : 0;
        let x2 = length2 >= 0 ? Number(num2[length2]) : 0;
        let tempSum = x1 + x2 + carry;
        result = `${tempSum % 10}${result}`;
        carry = Math.floor(tempSum / 10);
        length1--;
        length2--;
    }
    if (carry !== 0) {
        result = `${carry}${result}`;
    }
    return result;
};