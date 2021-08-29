// Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, 
// calculate each student's top five average.
// Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj 
// and their top five average. Sort result by IDj in increasing order.
// A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.


var highFive = function (items) {
    // sort array ID's DESC by comparing the id's first
    // if a.id < b.id switch them
    // if a.id === b.id, check the scores
    // sort the scores ASC, if a > b switch them
    // in order to keep track of the highest 5 scores;
    items = items.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        else if (a[0] === b[0] && a[1] > b[1]) return -1;
    });

    let avgScores = [];
    let k = 5;
    let i = 0;
    let n = items.length;

    while (i < n) {
        let sumScores = 0;
        let id = items[i][0];
        // sum the first 5 scores of the tracked id
        for (let j = i; j < i + k; j++) {
            let score = items[j][1];
            sumScores += score;
        }
        avgScores.push([id, Math.floor(sumScores / 5)]);

        // update i as long as id is not changing
        // once id has changes, update id at the top and run the next 
        // for loop for that id
        while (i < n && items[i][0] === id) {
            i++;
        }
    }
    return avgScores;
};