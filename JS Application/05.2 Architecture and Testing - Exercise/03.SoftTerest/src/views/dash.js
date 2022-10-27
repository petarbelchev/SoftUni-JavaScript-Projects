import { getRequest } from "../api.js"
import { setDetailsView } from "./details.js"

const dashboardView = document.getElementById('dashboard-holder')
const url = 'http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc';

export async function setDashboardView(main) {
    main.replaceChildren(dashboardView)

    const ideasData = await getRequest(url)

    if (ideasData.length > 0) {
        let result = []
        ideasData.forEach(idea => {
            result.push(`
            <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
                <div class="card-body">
                <p class="card-text">${idea.title}</p>
                 </div>
                <img class="card-image" src="${idea.img}" alt="Card image cap">
                <a class="btn" href="#" id="${idea._id}">Details</a>
            </div>
        `)})

        dashboardView.innerHTML = result.join('')
    }
}

dashboardView.addEventListener('click', (ev) => {
    if (ev.target.tagName == 'A') {
        setDetailsView(dashboardView.parentElement, ev.target.id)
    }
})