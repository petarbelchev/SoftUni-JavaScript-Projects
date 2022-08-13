function solve(arrOfArrs) {
    const dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let counter = 0;
    let isPlayerCountinue = false;
    let currSymbol = 'X';
    for (let turn = 0; turn < arrOfArrs.length; turn++) {
        let rowCol = arrOfArrs[turn].split(' ').map(Number);
        let row = rowCol[0];
        let col = rowCol[1];
        if (dashboard[row][col] != false) {
            console.log("This place is already taken. Please choose another!");
            //isPlayerCountinue = true;
            continue;
        } else {
            dashboard[row][col] = currSymbol;
            if (isSomeoneWin(currSymbol)) {
                console.log(`Player ${currSymbol} wins!`)
                break;
            }
            counter++;
            if (counter == 9) {
                console.log(`The game ended! Nobody wins :(`)
                break;
            }
            if (currSymbol == 'O') currSymbol = 'X';
            else currSymbol = 'O'
        }
    }
    for (let row of dashboard) {
        console.log(row.join('\t'));
    }
    function isSomeoneWin(currSymbol) {
        for (let row of dashboard) {
            if (row[0] == row[1] && row[1] == row[2] && row[2] == currSymbol) {
                return true;
            }
        }
        for (let col = 0; col < dashboard.length; col++) {
            if (dashboard[0][col] == dashboard[1][col] && 
                dashboard[1][col] == dashboard[2][col] && 
                dashboard[2][col] == currSymbol) {
                return true;
            }
        }
        if ((dashboard[0][0] == currSymbol && dashboard[1][1] == currSymbol && dashboard[2][2] == currSymbol) ||
            (dashboard[0][2] == currSymbol && dashboard[1][1] == currSymbol && dashboard[0][0] == currSymbol)) {
            return true;
        }
        return false;
    }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log('-------------------')
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
console.log('-------------------')
solve(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]);