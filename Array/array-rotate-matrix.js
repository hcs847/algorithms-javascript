var rotate = function (matrix) {
    let n = matrix.length;
    let halfN = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < halfN; j++) {
            [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
        }
    }
};