import * as api from "./api.js";


const endpoints = {
    allOffers: '/data/offers?sortBy=_createdOn%20desc',
    offerById: '/data/offers/',
    createOffer: '/data/offers',
    addApplication: '/data/applications'
}

export async function getAllOffers() {
    return await api.get(endpoints.allOffers);
}

export async function getOfferById(id) {
    return await api.get(endpoints.offerById + id);
}

export async function deleteOffer(ctx) {
    return await api.del(endpoints.offerById + ctx.params.id, ctx);
}

export async function editOfferById(id, data, ctx) {
    return await api.put(endpoints.offerById + id, data, ctx);
}

export async function createOffer(data, ctx) {
    return await api.post(endpoints.createOffer, data, ctx);
}

export async function addApplication(offerId, ctx) {
    return await api.post(endpoints.addApplication, {offerId}, ctx);
}

export async function getAllApplications(offerId) {
    return await api.get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}

export async function hasUserApplication(offerId, userId) {
    return await api.get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}