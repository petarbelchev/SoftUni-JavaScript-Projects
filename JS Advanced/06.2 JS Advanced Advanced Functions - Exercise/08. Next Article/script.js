function getArticleGenerator(articles) {
    const arrOfArticles = articles;

    function showNext() {
        if (arrOfArticles.length > 0) {
            let newArticle = document.createElement('article');
            newArticle.textContent = arrOfArticles.shift();
            document.getElementById('content').appendChild(newArticle);
        }
    }

    return showNext;
}
