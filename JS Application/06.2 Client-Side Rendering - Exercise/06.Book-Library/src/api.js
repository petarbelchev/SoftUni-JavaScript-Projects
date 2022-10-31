async function request(options, id) {
    let url = 'http://localhost:3030/jsonstore/collections/books';
    if (id !== undefined) {
        url += `/${id}`;
    }

    try {
        let response = await fetch(url, options);
        let data = await response.json();
        if (response.ok != true) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export async function get(id) {
    return await request(undefined, id);
}

export async function post(data) {
    let options = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    };
    return await request(options);
}

export async function put(data, id) {
    let options = {
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    };
    return await request(options, id);
}

export async function del(id) {
    let options = {
        method: 'delete'
    };
    return await request(options, id);
}