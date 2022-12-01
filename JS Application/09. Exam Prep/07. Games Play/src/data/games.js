import * as api from "./api.js";


const endpoints = {
    allGames: '/data/games?sortBy=_createdOn%20desc',
    newGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    gameById: '/data/games/',
    createGame: '/data/games',
    comments: '/data/comments'
}

export async function getAllGames() {
    return await api.get(endpoints.allGames);
}

export async function getNewGames() {
    return await api.get(endpoints.newGames);
}

export async function getGameById(id) {
    return await api.get(endpoints.gameById + id);
}

export async function deleteGame(ctx) {
    return await api.del(endpoints.gameById + ctx.params.id, ctx);
}

export async function editGameById(id, data, ctx) {
    return await api.put(endpoints.gameById + id, data, ctx);
}

export async function createGame(data, ctx) {
    return await api.post(endpoints.createGame, data, ctx);
}

export async function getAllComments(gameId) {
    return await api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function createComment(gameId, comment, ctx) {
    return await api.post(endpoints.comments, { gameId, comment }, ctx);
}