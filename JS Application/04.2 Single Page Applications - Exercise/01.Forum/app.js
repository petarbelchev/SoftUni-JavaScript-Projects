import { postNewTopic, loadHomePage } from './homePage.js';

const homePageHTML = document.getElementById('homePage');

const formHomePage = homePageHTML.querySelector('form');
formHomePage.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    let topicName = formData.get('topicName');
    let ownerName = formData.get('username');
    let topicComment = formData.get('postText');

    if (topicName !== '' && ownerName !== '' && topicComment !== '') {
        if (event.submitter.textContent == 'Post') {
            postNewTopic(topicName, ownerName, topicComment);
        }
        formHomePage.reset();
    }
});

const homeBtn = document.querySelector('a');
homeBtn.addEventListener('click', loadHomePage);

loadHomePage();