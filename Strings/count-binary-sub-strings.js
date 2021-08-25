// Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, 
// and all the 0's and all the 1's in these substrings are grouped consecutively.
// Substrings that occur multiple times are counted the number of times they occur.

var countBinarySubstrings = function (s) {
    const groups = [];
    let counter = 1;

    // create an array of groups of consecutive digits
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === s[i - 1]) {
            counter++;
        } else {
            groups.push(counter);
            counter = 1;
        };
    };

    let answer = 0;
    for (let i = 1; i < groups.length; i++) {
        // each adjacent groups needs to have the same number of digits
        // min number of digs === possible outcomes
        answer += Math.min(groups[i], groups[i - 1]);
    }
    return answer;
};