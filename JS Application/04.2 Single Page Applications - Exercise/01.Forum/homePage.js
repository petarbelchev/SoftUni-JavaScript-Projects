import { loadContentPage } from './contantPage.js';

document.querySelector('a').addEventListener('click', loadHomePage);

const homePageHTML = document.getElementById('homePage');
const formHomePage = homePageHTML.querySelector('form');

formHomePage.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    let topicName = formData.get('topicName');
    let ownerName = formData.get('username');
    let topicComment = formData.get('postText');

    if (event.submitter.textContent == 'Post') {
        if (topicName !== '' && ownerName !== '' && topicComment !== '') {
            postNewTopic(topicName, ownerName, topicComment);
            formHomePage.reset();
        }
    } else {
        formHomePage.reset();
    }
});

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const contentPageHTML = document.getElementById('contentPage');
const topicContainer = document.querySelector('.topic-container');

export function loadHomePage() {
    homePageHTML.style.display = 'flex';
    contentPageHTML.style.display = 'none';

    fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(`${res.status} ${res.statusText}`)
            }
            return res.json();

        }).then(data => {
            topicContainer.innerHTML = '';
            Object.values(data).forEach(postData => topicContainer.appendChild(renderPost(postData)));

        }).catch(err => alert(err.message));
}

function postNewTopic(topicName, ownerName, topicComment) {
    let date = new Date();

    fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            topicName,
            ownerName,
            topicComment,
            date
        })

    }).then(response => {
        if (response.status !== 200) {
            throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json();

    }).then(topicData => {
        topicContainer.appendChild(renderPost(topicData));

    }).catch(err => alert(err.message));
}

function renderPost(topicData) {
    let div = document.createElement('div');
    div.className = 'topic-name-wrapper';
    div.innerHTML = `
        <div class="topic-name" id="${topicData._id}">
            <a href="#" class="normal">
                <h2>${topicData.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${topicData.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topicData.ownerName}</span></p>
                    </div>
                </div>
            </div>
        </div>
        `;

    div.querySelector('a').addEventListener('click', () => {
        loadContentPage(
            topicData.topicName,
            topicData.ownerName,
            topicData.date,
            topicData.topicComment,
            topicData._id
        );
    });

    return div;
}