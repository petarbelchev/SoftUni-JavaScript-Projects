import * as api from "./api.js";


const endpoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    bookById: '/data/books/',
    addBook: '/data/books',
    likeBook: `/data/likes`
}

export async function addBook(data, ctx) {
    return await api.post(endpoints.addBook, data, ctx);
}

export async function getAllBooks() {
    return await api.get(endpoints.allBooks);
}

export async function getBookById(id) {
    return await api.get(endpoints.bookById + id);
}

export async function deleteBook(ctx) {
    return await api.del(endpoints.bookById + ctx.params.id, ctx);
}

export async function editBookById(id, data, ctx) {
    return await api.put(endpoints.bookById + id, data, ctx);
}

export async function getMyBooks(ctx) {
    let url = `/data/books?where=_ownerId%3D%22${ctx.userData._id}%22&sortBy=_createdOn%20desc`;
    return await api.get(url, ctx);
}

export async function likeBook(bookId, ctx) {
    return await api.post(endpoints.likeBook, { bookId }, ctx);
}

export async function getAllLikesOfBook(bookId) {
    let url = `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`;
    return await api.get(url);
}

export async function checkForLike(bookId, userId) {
    let url = `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
    let response = await api.get(url);
    
    if (response == 0) {
        return false;
    }

    return true; 
}