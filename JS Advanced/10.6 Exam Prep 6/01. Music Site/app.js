window.addEventListener('load', solve);

function solve() {
    const collectionOfSongs = document.querySelector('.all-hits-container');
    collectionOfSongs.addEventListener('click', clickHandler);
    const form = document.querySelector('form');    

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(form);
        let genre = formData.get('genre');
        let songName = formData.get('name');
        let authorName = formData.get('author');
        let dateCreated = formData.get('date');

        if (genre != '' && songName != '' && authorName != '' && dateCreated != '') {
            let div = document.createElement('div');
            div.className = 'hits-info';
            elemGenerator('img', undefined, div, undefined, './static/img/img.png');
            elemGenerator('h2', `Genre: ${genre}`, div);
            elemGenerator('h2', `Name: ${songName}`, div);
            elemGenerator('h2', `Author: ${authorName}`, div);
            elemGenerator('h3', `Date: ${dateCreated}`, div);
            elemGenerator('button', 'Save song', div, 'save-btn');
            elemGenerator('button', 'Like song', div, 'like-btn');
            elemGenerator('button', 'Delete', div, 'delete-btn');

            collectionOfSongs.appendChild(div);
            form.reset();
        }
    });

    function elemGenerator(type, content, parent, className, src) {
        let elem = document.createElement(type);

        if (content) elem.textContent = content;
        if (src) elem.src = src;
        if (parent) parent.appendChild(elem);
        if (className) elem.className = className;
    }

    const savedSongsCollection = document.querySelector('.saved-container');    
    savedSongsCollection.addEventListener('click', clickHandler);    
    const totalLikesParagraph = document.querySelector('.likes > p');

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