const host = 'http://localhost:3030/jsonstore'
const uriPosts = '/blog/posts'
const uriComments = '/blog/comments'

const btnLoadPosts = document.getElementById('btnLoadPosts')
const btnViewPost = document.getElementById('btnViewPost')
const postsList = document.getElementById('posts')
const postTitleField = document.getElementById('post-title')
const pContent = document.getElementById('post-body')
const ulComments = document.getElementById('post-comments')

btnLoadPosts.addEventListener('click', loadPosts)
btnViewPost.addEventListener('click', loadPostDetails)

let arrOfPosts = [];

async function loadPosts() {
    const response = await fetch(host + uriPosts)
    const postsData = Object.values(await response.json())
    postsData.forEach(postData => {
        arrOfPosts.push(postData)
        postsList.appendChild(makeElement('option', postData.id, postData.title))
    })
}

async function loadPostDetails() {
    const currPost = arrOfPosts.find(p => p.id == postsList.value)

    postTitleField.textContent = currPost.title
    pContent.textContent = currPost.body

    const response = await fetch(host + uriComments)
    const commentsData = Object.values(await response.json())
    ulComments.innerHTML = ''
    commentsData
        .filter(c => c.postId == currPost.id)
        .forEach(c => {
            ulComments.appendChild(makeElement('li', undefined, c.text, c.id))
        })
}

function makeElement(type, value, textContent, id) {
    let element = document.createElement(type);
    if (value !== undefined) element.value = value;
    if (textContent !== undefined) element.textContent = textContent;
    if (id !== undefined) element.id = id;
    return element;
}