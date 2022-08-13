function solve(arrOfArrs) {
    const matrix = arrOfArrs.map(row => row.split(' ').map(Number));
    let sumFirst = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirst += matrix[i][i];
    }
    let sumSecond = 0;
    for (let i = matrix.length - 1; i >= 0; i--) {
        sumSecond += matrix[i][matrix.length - 1 - i];
    }
    if (sumFirst == sumSecond) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row != col && row != matrix.length - 1 - col) {
                    matrix[row][col] = sumFirst;
                }
            }
        }
        for (const row of matrix) {
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