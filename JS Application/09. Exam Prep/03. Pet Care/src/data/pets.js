import * as api from "./api.js";


const endpoints = {
    allPets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    petById: '/data/pets/',
    createPet: '/data/pets',
    donate: '/data/donation'
}

export async function getAllPets() {
    return await api.get(endpoints.allPets);
}

export async function getPetById(id) {
    return await api.get(endpoints.petById + id);
}

export async function deletePet(ctx) {
    return await api.del(endpoints.petById + ctx.params.id, ctx);
}

export async function editPetById(id, data, ctx) {
    return await api.put(endpoints.petById + id, data, ctx);
}

export async function createPet(data, ctx) {
    return await api.post(endpoints.createPet, data, ctx);
}

export async function donate(data, ctx) {
    return await api.post(endpoints.donate, data, ctx);
}

export async function getDonations(petId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function checkDonation(petId, userId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}