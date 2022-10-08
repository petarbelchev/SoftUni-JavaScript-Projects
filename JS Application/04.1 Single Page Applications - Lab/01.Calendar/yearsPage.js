import { renderYearPage } from './yearPage.js'

let sections = document.querySelectorAll('section')
let yearsSection = document.getElementById('years')

yearsSection.querySelector('tbody').addEventListener('click', (e) => {
    if (e.target.tagName == 'TD' || e.target.tagName == 'DIV') {
        yearsSection.style.display = 'none'
        renderYearPage(e)
    }
})

export function renderYearsPage() {
    sections.forEach(section => {
        section.style.display = 'none'
    })
    yearsSection.style.display = 'block'
}