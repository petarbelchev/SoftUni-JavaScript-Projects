const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        let response = await fetch(host + url, options);

        if (response.ok != true ) {

            if (response.status == 403) {
                localStorage.removeItem('userData');
            }

            let error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return await response.json();
        }
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method, ctx, data) {
    let options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (ctx !== undefined) {
        options.headers['X-Authorization'] = ctx.userData.accessToken;
    }

    return options;
}

export async function get(url, ctx) {
    return await request(url, createOptions('get', ctx));
}

export async function post(url, data, ctx) {
    return await request(url, createOptions('post', ctx, data));
}

export async function put(url, data, ctx) {
    return await request(url, createOptions('put', ctx, data));
}

export async function del(url, ctx) {
    return await request(url, createOptions('delete', ctx));
}