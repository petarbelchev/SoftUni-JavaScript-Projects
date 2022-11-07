import * as api from "./api.js";


const endpoints = {
    membersByTeamId: '/data/members?where=status%3D%22member%22',
    memberById: '/data/members/',
    becomeMember: `/data/members`
}

export async function getAllMembers() {
    return await api.get(endpoints.membersByTeamId);
}

export async function getMembershipsByTeamId(teamId) {
    let url = `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`;
    return await api.get(url);
}

export async function getMemberById(id) {
    return await api.get(endpoints.memberById + id);
}

export async function becomeMember(teamId, ctx) {
    let data = { teamId };
    return await api.post(endpoints.becomeMember, data, ctx);
}

export async function approveRequest(ctx) {
    return await api.put(endpoints.memberById + ctx.params.id, { status: 'member' }, ctx)
}

export async function removeRequest(ctx) {
    return await api.del(endpoints.memberById + ctx.params.memId, ctx);
}

export async function getMyTeamsMembers(teamsIds, ctx) {
    let url = '/data/members?where=' + encodeURIComponent(`teamId IN (${teamsIds.map(i => `"${i}"`).join(', ')}) AND status="member"`);
    return await api.get(url, ctx);
}