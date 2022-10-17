window.addEventListener('load', solve);

function solve() {
    const collectionOfSongs = document.querySelector('.all-hits-container');
    collectionOfSongs.addEventListener('click', clickHandler);
    const addBtn = document.getElementById('add-btn');
    const totalLikesParagraph = document.querySelector('.likes > p')
    const savedSongsCollection = document.querySelector('.saved-container');

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        let genre = document.getElementById('genre');
        let songName = document.getElementById('name');
        let authorName = document.getElementById('author');
        let dateCreated = document.getElementById('date');

        if (genre.value != '' &&
            songName.value != '' &&
            authorName.value != '' &&
            dateCreated.value != '') {

            let div = document.createElement('div');
            div.className = 'hits-info';
            elemGenerator('img', undefined, div, undefined, './static/img/img.png');
            elemGenerator('h2', `Genre: ${genre.value}`, div);
            elemGenerator('h2', `Name: ${songName.value}`, div);
            elemGenerator('h2', `Author: ${authorName.value}`, div);
            elemGenerator('h3', `Date: ${dateCreated.value}`, div);
            elemGenerator('button', 'Save song', div, 'save-btn');
            elemGenerator('button', 'Like song', div, 'like-btn');
            elemGenerator('button', 'Delete', div, 'delete-btn');

            collectionOfSongs.appendChild(div);
            genre.value = '';
            songName.value = '';
            authorName.value = '';
            dateCreated.value = '';
        }
    })

    function elemGenerator(type, content, parent, className, src) {
        let elem = document.createElement(type);

        if (content) elem.textContent = content;
        if (src) elem.src = src;
        if (parent) parent.appendChild(elem);
        if (className) elem.className = className;
    }

    savedSongsCollection.addEventListener('click', (ev) => {
        if (ev.target.className == 'delete-btn') {
            ev.target.parentElement.remove();
        }
    })

    function clickHandler(ev) {
        if (ev.target.className == 'like-btn') {
            let currLikes = Number(totalLikesParagraph.textContent.split(': ')[1]);
            currLikes++;
            totalLikesParagraph.textContent = `Total Likes: ${currLikes}`;
            ev.target.disabled = true;
        } else if (ev.target.className == 'save-btn') {
            let song = ev.target.parentElement;
            song.querySelector('.save-btn').remove();
            song.querySelector('.like-btn').remove();
            savedSongsCollection.appendChild(song);
        } else if (ev.target.className == 'delete-btn') {
            ev.target.parentElement.remove();
        }
    }
}