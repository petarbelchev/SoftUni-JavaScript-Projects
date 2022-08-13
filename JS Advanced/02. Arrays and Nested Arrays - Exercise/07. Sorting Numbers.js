function solve(arrOfNum){
    const sortedArr = [];
    arrOfNum.sort((a, b) => a - b);
    while(arrOfNum.length > 0) {
        sortedArr.push(arrOfNum.shift());
        if(arrOfNum.length > 0){
            sortedArr.push(arrOfNum.pop());
        }
    }
    return sortedArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));