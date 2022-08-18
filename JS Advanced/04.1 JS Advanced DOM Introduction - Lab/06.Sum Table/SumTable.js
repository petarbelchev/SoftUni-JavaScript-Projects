function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let total = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        let colums = rows[i].children;
        let costCol = colums[colums.length - 1].textContent;
        total += Number(costCol);
    }
    document.getElementById('sum').textContent = total;
}