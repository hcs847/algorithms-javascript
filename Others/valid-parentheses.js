var isValid = function (s) {
    if (s.length % 2) return false;
    const charArr = [];
    for (let i = 0; i < s.length; i++) {
        let delta = s[i].charCodeAt() - charArr[charArr.length - 1]
        if (delta > 0 && delta < 3) {
            charArr.pop();
        } else {
            charArr.push(s[i].charCodeAt());
        }
    }
    return charArr.length === 0;
};