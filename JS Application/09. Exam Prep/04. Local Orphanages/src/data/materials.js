import * as api from "./api.js";


const endpoints = {
    allMaterials: '/data/posts?sortBy=_createdOn%20desc',
    materialById: '/data/posts/',
    createMaterial: '/data/posts',
    donation: '/data/donations'
}

export async function getAllMaterials() {
    return await api.get(endpoints.allMaterials);
}

export async function getMaterialById(id) {
    return await api.get(endpoints.materialById + id);
}

export async function deleteMaterial(ctx) {
    return await api.del(endpoints.materialById + ctx.params.id, ctx);
}

export async function editMaterialById(id, data, ctx) {
    return await api.put(endpoints.materialById + id, data, ctx);
}

export async function getMyMaterials(ctx) {
    let url = `/data/posts?where=_ownerId%3D%22${ctx.userData._id}%22&sortBy=_createdOn%20desc`;
    return await api.get(url, ctx);
}

export async function createMaterial(data, ctx) {
    return await api.post(endpoints.createMaterial, data, ctx);
}

export async function makeDonation(postId, ctx) {
    return await api.post(endpoints.donation, { postId }, ctx);
}

export async function checkDonate(postId, userId) {
    return await api.get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function getDonationsCount(postId) {
    return await api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}