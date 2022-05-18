/**
 * @param {string} s
 * @return {string}
 */
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

var reverseVowels = function (s) {
    // create an array of vowels in string
    let vowels = s.match(/[aAeEiIoOuU]/g);
    // convert string to an array
    let sArr = s.split('');

    // loop through array and replace vowels found
    // with vowels from the end of the vowels array
    // remove last element from vowels array once used
    for (let i = 0; i < sArr.length; i++) {
        if (/[aAeEiIoOuU]/.test(sArr[i])) {
            sArr[i] = vowels[vowels.length - 1];
            vowels.pop();
        }
    }
    return sArr.join('');
};