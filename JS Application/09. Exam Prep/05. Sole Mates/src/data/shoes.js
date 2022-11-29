import * as api from "./api.js";


const endpoints = {
    allShoes: '/data/shoes?sortBy=_createdOn%20desc',
    shoesById: '/data/shoes/',
    createShoes: '/data/shoes'
}

export async function getAllShoes() {
    return await api.get(endpoints.allShoes);
}

export async function getShoesById(id) {
    return await api.get(endpoints.shoesById + id);
}

export async function deleteShoes(ctx) {
    return await api.del(endpoints.shoesById + ctx.params.id, ctx);
}

export async function editShoesById(id, data, ctx) {
    return await api.put(endpoints.shoesById + id, data, ctx);
}

export async function createShoes(data, ctx) {
    return await api.post(endpoints.createShoes, data, ctx);
}

export async function searchRequest(query) {
    return await api.get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}