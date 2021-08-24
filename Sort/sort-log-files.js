const sortArr = (arr, a, b) => {
    let contentA = a.split(' ').slice(1).join(' ');
    let keyA = a.split(' ')[0];
    let contentB = b.split(' ').slice(1).join(' ');
    let keyB = b.split(' ')[0];
    if (contentA.localeCompare(contentB) < 0 ||
        (contentA.localeCompare(contentB) === 0 && (keyA.localeCompare(keyB) < 0))) {
        return -1;
    } else {
        return 1;
    }
}

var reorderLogFiles = function (logs) {
    const lettersArr = [];
    const digitsArr = [];
    for (let log of logs) {
        let first = log.split(' ')[1];
        if (parseInt(first) >= 0) {
            digitsArr.push(log);
        } else {
            lettersArr.push(log);
        }
    }
    return [...lettersArr.sort((a, b) => sortArr(lettersArr, a, b)), ...digitsArr];
};