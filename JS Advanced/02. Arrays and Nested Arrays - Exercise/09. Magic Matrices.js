function solve(arrOfArrs) {
    let sum = 0;
    for (let row = 0; row < arrOfArrs.length; row++) {
        let currRowSum = arrOfArrs[row].reduce((prev, curr) => prev + curr);
        if (sum == 0) {
            sum = currRowSum;
        } else {
            if (currRowSum != sum) {
                return false;
            }
        }
    }
    for (let col = 0; col < arrOfArrs.length; col++) {
        let currColSum = 0;
        for (let row = 0; row < arrOfArrs.length; row++) {
            currColSum += arrOfArrs[row][col];
        }
        if (sum == 0) {
            sum = currColSum;
        } else {
            if (currColSum != sum) {
                return false;
            }
        }
    }
    return true;
}



console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));