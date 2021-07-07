var countAndSay = function (n) {
    if (n === 1) return '1';
    const getCountNSay = (result, number, prev) => {
        if (number === n) return prev;
        let i = 0;
        let count = 1;
        while (i < prev.length) {
            if (prev[i] === prev[i + 1]) {
                count++;
                i++;
            } else {
                result += `${(count)}${prev[i]}`;
                i++;
                count = 1;
            }
        }
        return getCountNSay('', number + 1, result);
    }

    return getCountNSay('', 1, '1');

};