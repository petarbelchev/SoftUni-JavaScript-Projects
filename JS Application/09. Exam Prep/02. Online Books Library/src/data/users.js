import * as api from "./api.js";

const endpoints = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register'
};

export async function login(data, ctx) {
    return await api.post(endpoints.login, data, ctx);
}

export async function logout(ctx) {
    return await api.get(endpoints.logout, ctx);
}

export async function register(data) {
    return await api.post(endpoints.register, data);
}