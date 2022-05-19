/**
 * @param {string} word
 * @return {number}
 */
//  You are given a string word that consists of digits and lowercase English letters.
//  You will replace every non-digit character with a space. For example, "a123bc34d8ef34" 
// will become " 123  34 8  34". Notice that you are left with some integers that are separated by 
// at least one space: "123", "34", "8", and "34".
//  Return the number of different integers after performing the replacement operations on word.
//  Two integers are considered different if their decimal representations without any leading zeros are different.

var numDifferentIntegers = function (word) {
    // create an array of numbers by matching repeating digits within the string
    const wordArr = word.match(/[\d]+/g) || [];
    const numObj = {};

    // iterate through the array and convert to BigInt to remove zeros
    // removing duplicates by always assigning 1 to the same key
    for (let i = 0; i < wordArr.length; i++) {
        numObj[BigInt(wordArr[i])] = 1;
    }
    return Object.keys(numObj).length;
}