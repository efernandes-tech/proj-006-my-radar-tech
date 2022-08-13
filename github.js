// https://api.github.com/repos/edersonlrf/ag-001-cdc-book-angular2/languages
async function githubGetLanguages(languages_url) {
    languages = {};

    await fetch(languages_url, {
        headers: {
            "Authorization": "token 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"
        }
    })
        .then(response => response.json())
        .then(json => {
            languages = json;
        });

    return languages;
}

// https://api.github.com/users/edersonlrf/repos
async function githubGetRepos(username) {
    repos = [];

    await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated&page=1&per_page=3`, {
        headers: {
            "Authorization": "token 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"
        }
    })
        .then(response => response.json())
        .then(json => {
            json.forEach(async (repo) => {
                repos.push({
                    'name': repo.name,
                    'html_url': repo.html_url,
                    'language': repo.language ? repo.language : '',
                    'languages_url': repo.languages_url,
                    'languages': null,
                });
            })
        });

    return repos;
}
