window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('publish')
    let tableBody = document.getElementById('table-body')
    let selledCars = document.getElementById('cars-list')
    let profitMade = document.getElementById('profit')

    let make = document.getElementById('make')
    let model = document.getElementById('model')
    let year = document.getElementById('year')
    let fuelType = document.getElementById('fuel')
    let originalCost = document.getElementById('original-cost')
    let sellingPrice = document.getElementById('selling-price')

    publishBtn.addEventListener('click', (e) => {
        e.preventDefault()

        if (make.value.length != 0 &&
            model.value.length != 0 &&
            year.value.length != 0 &&
            fuelType.value.length != 0 &&
            originalCost.value.length != 0 &&
            originalCost.value > 0 &&
            sellingPrice.value.length != 0 &&
            sellingPrice.value > originalCost.value) {

            let trHtml = `
                <td>${make.value}</td>
                <td>${model.value}</td>
                <td>${year.value}</td>
                <td>${fuelType.value}</td>
                <td>${originalCost.value}</td>
                <td>${sellingPrice.value}</td>
                <td>
                    <button class="action-btn edit">Edit</button>
                    <button class="action-btn sell">Sell</button>
                </td>
            `
            let tr = document.createElement('tr')
            tr.className = 'row'
            tr.innerHTML = trHtml

            let trChildren = tr.children

            tr.querySelector('button').addEventListener('click', () => {
                make.value = trChildren[0].innerHTML
                model.value = trChildren[1].innerHTML
                year.value = trChildren[2].innerHTML
                fuelType.value = trChildren[3].innerHTML
                originalCost.value = trChildren[4].innerHTML
                sellingPrice.value = trChildren[5].innerHTML
                tr.remove()
            })

            tr.querySelectorAll('button')[1].addEventListener('click', () => {
                let html = `
                    <span>${trChildren[0].innerHTML} ${trChildren[1].innerHTML}</span>
                    <span>${trChildren[2].innerHTML}</span>
                    <span>${trChildren[5].innerHTML - trChildren[4].innerHTML}</span>
                `
                tr.remove()
                let li = document.createElement('li')
                li.className = 'each-list'
                li.innerHTML = html
                selledCars.appendChild(li)
                let currProfit = Number(profitMade.textContent)
                let addProfit = Number(trChildren[5].innerHTML - trChildren[4].innerHTML)
                profitMade.textContent = (currProfit + addProfit).toFixed(2)
            })

            tableBody.appendChild(tr)

            make.value = ''
            model.value = ''
            year.value = ''
            fuelType.value = ''
            originalCost.value = ''
            sellingPrice.value = ''
        }
    })
}
