var climbStairs = function (n) {
    let options = 0;
    let results = [0, 1, 2];

    const getOptions = (stepsLeft) => {
        let saved = results[stepsLeft];
        if (saved >= 0) return saved;
        let steps = options + getOptions(stepsLeft - 1) + getOptions(stepsLeft - 2);
        results[stepsLeft] = steps;
        return steps;
    }
    return getOptions(n);
};