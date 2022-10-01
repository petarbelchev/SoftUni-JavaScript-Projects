async function loadRepos() {
	let username = document.getElementById('username').value;
	let repos = document.getElementById('repos');
	repos.innerHTML = '';

	try {
		let response = await fetch(`https://api.github.com/users/${username}/repos`);
		
		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}		
		let data = await response.json();
		
		for (const repo of data) {
			repos.innerHTML += `<li>
									<a href="${repo.html_url}">${repo.full_name}</a>
								</li>`;
		}

	} catch (error) {
		repos.innerHTML = `${error.message}`;
	}
}