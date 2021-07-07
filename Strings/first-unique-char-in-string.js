var firstUniqChar = function (s) {
    let counterSingle = {};
    let counterRepeate = {};

    for (let i = 0; i < s.length; i++) {
        if (counterRepeate[s[i]]) continue;
        else if (counterSingle[s[i]] >= 0) {
            delete counterSingle[s[i]];
            counterRepeate[s[i]] = 1;
        } else {
            counterSingle[s[i]] = i;
        }
    }

    for (let count in counterSingle) {
        return counterSingle[count];
    }
    return -1;
};