function solve() {
    let binaryOpt = document.createElement('option');
    binaryOpt.value = "binary";
    binaryOpt.innerHTML = "Binary";

    let hexadecimalOpt = document.createElement('option');
    hexadecimalOpt.value = "hexadecimal";
    hexadecimalOpt.innerHTML = "Hexadecimal";

    let selectMenuTo = document.getElementById('selectMenuTo');
    selectMenuTo.appendChild(binaryOpt);
    selectMenuTo.appendChild(hexadecimalOpt);

    document.querySelector('button').addEventListener('click', convert);

    function convert() {
        let binaryOpt = document.getElementById('selectMenuTo')[1];
        let hexadecimalOpt = document.getElementById('selectMenuTo')[2];
        let number = Number(document.getElementById('input').value);
    
        if (binaryOpt.selected) {
            document.getElementById('result').value = number.toString(2);
        } else if (hexadecimalOpt.selected) {
            document.getElementById('result').value = number.toString(16).toUpperCase();
        }
    }
}
