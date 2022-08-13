function solve(arrOfCmds) {
    const initialNum = 1;
    const arrOfResult = [];
    for (let i = 1; i <= arrOfCmds.length; i++) {
        if (arrOfCmds[i - 1] == 'add') arrOfResult.push(i);
        else if (arrOfCmds[i - 1] == 'remove') arrOfResult.pop();
    }
    if(arrOfResult.length > 0) console.log(arrOfResult.join('\n'));
    else console.log('Empty');
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);