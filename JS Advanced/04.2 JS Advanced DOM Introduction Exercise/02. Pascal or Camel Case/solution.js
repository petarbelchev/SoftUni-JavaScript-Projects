function solve() {
    let input = document.getElementById('text').value;
    let formatType = document.getElementById('naming-convention').value;
    let arrOfInput = input.split(' ').map(str => str.toLowerCase());
    let result = '';
    if (formatType == 'Camel Case') {
        result += arrOfInput[0];
        for (let i = 1; i < arrOfInput.length; i++) {
            arrOfInput[i] = arrOfInput[i][0].toUpperCase() + arrOfInput[i].slice(1);
            result += arrOfInput[i];
        }
    } else if (formatType == 'Pascal Case') {
        for (let i = 0; i < arrOfInput.length; i++) {
            arrOfInput[i] = arrOfInput[i][0].toUpperCase() + arrOfInput[i].slice(1);
            result += arrOfInput[i];
        }
    } else {
        result = 'Error!'
    }
    document.getElementById('result').innerHTML = result;
}