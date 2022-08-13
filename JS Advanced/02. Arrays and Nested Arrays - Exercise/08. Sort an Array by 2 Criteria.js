function solve(arrOfStr) {
    arrOfStr
        .sort()
        .sort((a,b) => String(a).length - String(b).length);
    
    console.log(arrOfStr.join('\n'));
}



solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);