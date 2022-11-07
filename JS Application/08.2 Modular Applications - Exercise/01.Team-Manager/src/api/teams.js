import * as api from "./api.js";

const endpoints = {
    teams: '/data/teams',
    teamById: '/data/teams/'
}

export async function getAllTeams() {
    return await api.get(endpoints.teams);
}

export async function createTeam(data, ctx) {
    return await api.post(endpoints.teams, data, ctx);
}

export async function getTeamById(id) {
    return await api.get(endpoints.teamById + id);
}

export async function editTeamById(id, data, ctx) {
    return await api.put(endpoints.teamById + id, data, ctx);
}

export async function getMyTeams(ctx) {
    let url = `/data/members?where=_ownerId%3D%22${ctx.userData._id}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`;
    return await api.get(url, ctx);
}