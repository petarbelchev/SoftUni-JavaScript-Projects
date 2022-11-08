import * as api from "./api.js";


const endpoints = {
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    memeById: '/data/memes/',
    createMeme: '/data/memes'
}

export async function getAllMemes() {
    return await api.get(endpoints.allMemes);
}

export async function getMemeById(id) {
    return await api.get(endpoints.memeById + id);
}

export async function deleteMeme(ctx) {
    return await api.del(endpoints.memeById + ctx.params.id, ctx);
}

export async function editMemeById(id, data, ctx) {
    return await api.put(endpoints.memeById + id, data, ctx);
}

export async function getMyMemes(ctx) {
    let url = `/data/memes?where=_ownerId%3D%22${ctx.userData._id}%22&sortBy=_createdOn%20desc`;
    return await api.get(url, ctx);
}

export async function createMeme(data, ctx) {
    return await api.post(endpoints.createMeme, data, ctx);
}