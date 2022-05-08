var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    let result = [1, rowIndex];
    if (rowIndex === 1) return result;

    const createArr = (n) => {
        if ((n > rowIndex / 2) && (rowIndex % 2)) return [...result, ...result.reverse()];
        if ((n > rowIndex / 2) && !(rowIndex % 2)) return [...result, ...result.slice(0, -1).reverse()];
        if (n > 1) {
            result[n] = result[n - 1] * (rowIndex - (result.length - 1)) / result.length;
            return [...createArr(n + 1)];
        }
    }
    return createArr(2);
};