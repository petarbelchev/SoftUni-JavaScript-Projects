const formContentPage = contentPage.querySelector('form');
let currTopicId;

formContentPage.addEventListener('submit', (event) => {
    event.preventDefault();
    let date = new Date();
    let formData = new FormData(event.currentTarget);
    let comment = formData.get('postText');
    let username = formData.get('username');

    if (comment !== '' && username !== '') {
        addComment(comment, username, currTopicId, date);
        formContentPage.reset();
        loadUserComments(currTopicId);
    }
});

const homePageHTML = document.getElementById('homePage');
const contentPageHTML = document.getElementById('contentPage');
const topicTitleField = contentPage.querySelector('h2');
const ownerNameField = contentPage.querySelector('span');
const dateField = contentPage.querySelector('time');
const topicCommentField = contentPage.querySelector('.post-content');

export function loadContentPage(topicName, ownerName, date, topicComment, topicId) {
    contentPageHTML.style.display = 'flex';
    homePageHTML.style.display = 'none';

    topicTitleField.textContent = topicName;
    ownerNameField.textContent = ownerName;
    dateField.textContent = date;
    topicCommentField.textContent = topicComment;    
    currTopicId = topicId;

    loadUserComments(topicId);
}

const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const usersComments = contentPage.querySelector('#user-comment');

function loadUserComments(topicId) {
    fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(`${res.status} ${res.statusText}`);
            }

            return res.json();

        }).then(allComments => {
            usersComments.innerHTML = '';
            let comments = Object.values(allComments).filter(c => c.topicId == topicId);

            if (comments.length == 0) {
                return '';
            }

            comments.forEach(c => {
                let contentHTML = `
                    <div class="topic-name-wrapper">
                        <div class="topic-name">
                            <p><strong>${c.username}</strong> commented on <time>${c.date}</time></p>
                            <div class="post-content">
                                <p>${c.comment}</p>
                            </div>
                        </div>
                    </div>
                `;

                usersComments.innerHTML += contentHTML;
            })
        }).catch(err => alert(err.message));
}

function addComment(comment, username, topicId, date) {
    fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            comment,
            username,
            topicId,
            date
        })
    }).then(res => {
        if (res.status !== 200) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
    }).catch(err => alert(err.message));
}