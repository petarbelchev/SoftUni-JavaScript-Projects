import { deleteRequest, getRequest } from "../api.js";
import { setDashboardView } from "./dash.js";

const detailsView = document.getElementById('detailsView')
const url = 'http://localhost:3030/data/ideas/'

export async function setDetailsView(main, id) {
    const details = await getRequest(url + id)

    detailsView.innerHTML = `
        <img class="det-img" src="${details.img}" />
        <div class="desc">
            <h2 class="display-5">${details.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${details.description}</p>
        </div>
        <div class="text-center">
            <a class="btn detb" href="#" id="${id}">Delete</a>
        </div>
    `;

    const deleteBtn = detailsView.querySelector('a')

    if (details._ownerId != localStorage.id) {
        deleteBtn.remove()
    } else {
        deleteBtn.addEventListener('click', async (ev) => {
            try {
                await deleteRequest(ev.target.id)
                setDashboardView(main)
            } catch (error) {
                alert(error)
            }
        })
    }

    main.replaceChildren(detailsView)
}