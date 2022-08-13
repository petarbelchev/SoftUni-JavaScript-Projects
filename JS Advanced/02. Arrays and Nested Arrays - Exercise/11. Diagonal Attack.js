function solve(arrOfArrs) {
    const matrix = [];
    for (let row of arrOfArrs) {
        matrix.push(row.split(' ').map(Number));
    }
    let blankMatrix = [];
    for (let row = 0; row < matrix.length; row++) {
        blankMatrix[row] = [];
        for (let col = 0; col < matrix.length; col++) {
            blankMatrix[row].push(0);
        }
    }
    let sumFirst = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirst += matrix[i][i];
        blankMatrix[i][i] = matrix[i][i];
    }
    let sumSecond = 0;
    for (let i = matrix.length - 1; i >= 0; i--) {
        sumSecond += matrix[i][matrix.length - 1 - i];
        blankMatrix[i][matrix.length - 1 - i] = matrix[i][matrix.length - 1 - i];
    }
    if (sumFirst == sumSecond) {
        for (let row = 0; row < blankMatrix.length; row++) {
            for (let col = 0; col < blankMatrix.length; col++) {
                if (blankMatrix[row][col] == 0) {
                    blankMatrix[row][col] = sumFirst;
                }
            }
        }
        for (const row of blankMatrix) {
            console.log(row.join(' '));
        }
    } else {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

solve([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);