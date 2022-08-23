function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', quickCheck);
    document.getElementsByTagName('button')[1].addEventListener('click', clear);
    let field = document.querySelectorAll('tbody tr');
    let table = document.getElementsByTagName('table')[0];
    let p = document.querySelector('#check p');

    function quickCheck() {
        let isSuccessfully = true;

        for (let row = 0; row < field.length; row++) {
            let cellOne = Number(field[row].children[0].children[0].value);
            let cellTwo = Number(field[row].children[1].children[0].value);
            let cellThree = Number(field[row].children[2].children[0].value);
            let sum = cellOne + cellTwo + cellThree;

            if (cellOne == cellTwo || cellOne == cellThree || cellTwo == cellThree || sum != 6) {
                isSuccessfully = false;
                break;
            }
        }

        for (let col = 0; col < field[0].children[0].length; col++) {
            let cellOne = Number(ield[0].children[col].children[0].value);
            let cellTwo = Number(field[1].children[col].children[0].value);
            let cellThree = Number(field[2].children[col].children[0].value);
            let sum = cellOne + cellTwo + cellThree;

            if (cellOne == cellTwo || cellOne == cellThree || cellTwo == cellThree || sum != 6) {
                isSuccessfully = false;
                break;
            }
        }

        getResult(isSuccessfully);
    }

    function getResult(isSuccessfully) {
        if (isSuccessfully) {
            table.style.border = '2px solid green';
            p.textContent = 'You solve it! Congratulations!';
            p.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            p.textContent = 'NOP! You are not done yet...';
            p.style.color = 'red';
        }
    }

    function clear() {
        for (let row = 0; row < field.length; row++) {
            for (let col = 0; col < field[row].children.length; col++) {
                field[row].children[col].children[0].value = '';
            }
        }

        table.style.border = 'none';
        p.textContent = '';
    }
}