var isValidSudoku = function (board) {
    const rows = {};
    const columns = {};
    const boxes = {};

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            let numRow = `${num}-row-${i}`;
            let numCol = `${num}-col-${j}`;
            let numBox = `${num}-box-${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

            if (num !== '.') {
                if (numRow in rows || numCol in columns || numBox in boxes) {
                    return false;
                } else {
                    rows[numRow] = 1;
                    columns[numCol] = 1;
                    boxes[numBox] = 1;
                }
            }
        }
    }
    return true;
};