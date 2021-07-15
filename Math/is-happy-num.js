var isHappy = function (n) {
    let sumMap = {};

    const checkHappy = (n) => {
        let numLen = n.toString().length;
        let sum = 0;
        for (let i = 0; i < numLen; i++) {
            sum += (Math.floor(n / Math.pow(10, i)) % 10) ** 2;
        }
        if (sum === 1) return true;
        if (sum in sumMap) return false;
        sumMap[sum] = 1;
        return checkHappy(sum);
    }
    return checkHappy(n);
};