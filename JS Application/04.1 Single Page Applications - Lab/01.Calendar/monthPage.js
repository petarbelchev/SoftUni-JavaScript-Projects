let monthsNumber = {
    Jan: 1, Feb: 2, Mar: 3, 
    Apr: 4, May: 5, Jun: 6, 
    Jul: 7, Aug: 8, Sept: 9, 
    Oct: 10, Nov: 11, Dec: 12
}

export function renderMonth(e, selectedYear) {
    let selectedMonth;

    if (e.target.tagName == 'TD') {
        selectedMonth = e.target.querySelector('div').innerText
    } else { // e.target.tagName == 'DIV'
        selectedMonth = e.target.innerText
    }
    
    let monthToRender = document.getElementById(`month-${selectedYear}-${monthsNumber[selectedMonth]}`)

    monthToRender.style.display = 'block'
}