// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead be stored in the input character array chars. 
// Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// Algorithm can only use constant extra space.

var compress = function (chars) {
    let len = chars.length;
    if (len === 1) return;
    let counter = 1;
    countStr = [];

    for (let i = len - 1; i >= 0; i--) {
        if (chars[i] === chars[i - 1]) {
            counter++;
            // amend chars array only if char is appearing more than once
        } else if (counter > 1) {
            counterStr = counter.toString().split('');
            // leave first char, delete the rest and inster counter string
            chars.splice(i + 1, counter - 1, ...counterStr);
            // reset counter for the next chars
            counter = 1;
        }
    }
};