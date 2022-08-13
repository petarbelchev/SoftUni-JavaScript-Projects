function solve(arrOfStr, num) {
    for (let i = 1; i <= num; i++) {
        const currEl = arrOfStr.pop();
        arrOfStr.unshift(currEl);
    }
    console.log(arrOfStr.join(' '));
}

solve(['1', '2', '3', '4'], 2); //3 4 1 2
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15); //Orange Coconut Apple Banana