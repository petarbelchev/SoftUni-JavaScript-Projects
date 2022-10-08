import { renderMonth } from './monthPage.js'

export function renderYearPage(e) {
    let selectedYear;
    if (e.target.tagName == 'TD') {
        selectedYear = e.target.querySelector('div').innerText
    } else { // tagName == 'DIV'
        selectedYear = e.target.innerText
    }

    let yearToRender = document.getElementById(`year-${selectedYear}`)
    yearToRender.style.display = 'block'

    yearToRender.addEventListener('click', (e) => {
        if (e.target.tagName == 'TD' || e.target.tagName == 'DIV') {
            yearToRender.style.display = 'none'
            renderMonth(e, selectedYear)
        }
    })
}