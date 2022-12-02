import * as api from "./api.js";


const endpoints = {
    allTheaters: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    theaterById: '/data/theaters/',
    createTheater: '/data/theaters',
    addLike: '/data/likes'
}

export async function getAllEvents() {
    return await api.get(endpoints.allTheaters);
}

export async function getEventById(id) {
    return await api.get(endpoints.theaterById + id);
}

export async function deleteEvent(ctx) {
    return await api.del(endpoints.theaterById + ctx.params.id, ctx);
}

export async function editEventById(id, data, ctx) {
    return await api.put(endpoints.theaterById + id, data, ctx);
}

export async function getMyEvents(ctx) {
    let url = `/data/theaters?where=_ownerId%3D%22${ctx.userData._id}%22&sortBy=_createdOn%20desc`;
    return await api.get(url, ctx);
}

export async function createEvent(data, ctx) {
    return await api.post(endpoints.createTheater, data, ctx);
}

export async function addLike(theaterId, ctx) {
    return await api.post(endpoints.addLike, { theaterId }, ctx);
}

export async function getAllLikes(theaterId) {
    return await api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function checkForLike(theaterId, userId) {
    return await api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}