/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const arrNumRows = [];
    let row = 1;

    while (row <= numRows) {
        arrNumRows[row - 1] = [];
        for (let i = 0; i < row; i++) {
            if (i === 0 || (i === row - 1)) {
                (arrNumRows[row - 1]).push(1);
            } else {
                arrNumRows[row - 1].push(arrNumRows[row - 1][i - 1] * (row - i) / i);
            };
        }
        row++;
    }
    return arrNumRows;
};