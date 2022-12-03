import * as api from "./api.js";


const endpoints = {
    allAlbums: '/data/albums?sortBy=_createdOn%20desc',
    albumById: '/data/albums/',
    createAlbum: '/data/albums',
    addLike: '/data/likes'
}

export async function getAllAlbums() {
    return await api.get(endpoints.allAlbums);
}

export async function getAlbumById(id) {
    return await api.get(endpoints.albumById + id);
}

export async function deleteAlbum(ctx) {
    return await api.del(endpoints.albumById + ctx.params.id, ctx);
}

export async function editAlbumById(id, data, ctx) {
    return await api.put(endpoints.albumById + id, data, ctx);
}

export async function createAlbum(data, ctx) {
    return await api.post(endpoints.createAlbum, data, ctx);
}

export async function addLike(albumId, ctx) {
    return await api.post(endpoints.addLike, { albumId }, ctx);
}

export async function getAllLikes(albumId) {
    return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function checkForLike(albumId, userId) {
    return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}