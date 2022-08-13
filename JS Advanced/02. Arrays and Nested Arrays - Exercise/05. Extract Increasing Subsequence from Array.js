function solve(arrOfNums) {
    let bigestNum = arrOfNums[0];
    const resultArr = [bigestNum];
    for (let i = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] >= bigestNum) {
            resultArr.push(arrOfNums[i]);
            bigestNum = arrOfNums[i];
        }
    }
    return resultArr;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));