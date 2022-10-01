function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');
    commits.innerHTML = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    function handleResponse(response) {
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
    }
    
    function handleData(data) {
        for (const commit of data) {
            commits.innerHTML += `<li>${commit.commit.author.name}: ${commit.commit.message}</li>`;
        }
    }

    function handleError(error) {
        commits.innerHTML = `Error: ${error.message}`;
    }
}