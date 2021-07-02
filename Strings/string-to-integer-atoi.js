/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let result = '';
    let start;
    let limit = Math.pow(2, 31);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        if ((s[i] === '-' || s[i] === '+')) {
            result += s[i];
            start = i + 1;
            break;
        };
        if (/[^0-9]/.test(s[i])) break;
        if (/[0-9]/.test(s[i])) {
            start = i;
            break;
        }
    }

    if (start >= 0) {
        let updatedS = s.slice(start);
        for (let i = 0; i < updatedS.length; i++) {
            if (/[0-9]/.test(updatedS[i]))
                result += updatedS[i];
            else
                break;
        }
    }

    if (Number(result) < limit && Number(result) > -(limit + 1)) {
        return Number(result);
    }
    if (Number(result) >= limit) {
        return (limit - 1);
    }
    if (Number(result) < -limit) {
        return -limit;
    }
    return 0;
};