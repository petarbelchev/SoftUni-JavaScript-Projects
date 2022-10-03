function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', loadPostDetails);
}

let arrOfPosts = [];
let postsList = document.getElementById('posts');
let postTitleField = document.getElementById('post-title');
let pContent = document.getElementById('post-body');
let ulComments = document.getElementById('post-comments');

function loadPosts() {
    postsList.innerHTML = '';
    
    fetch('http://localhost:3030/jsonstore/blog/posts')
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            pContent.textContent = '';
            return response.json();
        })
        .then(data => {
            for (const key in data) {
                arrOfPosts.push(data[key]);
                postsList.appendChild(makeElement('option', key, data[key].title));
            }
        })
        .catch(error => pContent.textContent = error.message);
}

function makeElement(type, value, textContent, id) {
    let element = document.createElement(type);
    if (value !== undefined) element.value = value;
    if (textContent !== undefined) element.textContent = textContent;
    if (id !== undefined) element.id = id;
    return element;
}


function loadPostDetails() {
    let postId = postsList.value;
    postTitleField.textContent = '';
    pContent.textContent = '';
    ulComments.innerHTML = '';

    fetch('http://localhost:3030/jsonstore/blog/comments')
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            let arrOfComments = Object.values(data);

            if (postId === '') {
                return arrOfComments;
            }

            return arrOfComments.filter(c => c.postId == postId);
        })
        .then(comments => {
            let currPost = arrOfPosts.find(post => post.id == postId);

            if (currPost !== undefined){
                postTitleField.textContent = currPost.title;
                pContent.textContent = currPost.body;
            }

            comments.forEach(c => {
                ulComments.appendChild(makeElement('li', undefined, c.text, c.id))
            });
        })
        .catch(error => pContent.textContent = error.message);
}

attachEvents();