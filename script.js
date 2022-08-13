var REPOSITORIES;

const username = document.getElementById('username').value;
const listRepos = document.getElementById('listRepos');

async function init() {
    REPOSITORIES = await githubGetRepos(username);

    await REPOSITORIES.forEach(async (repo, index) => {
        let languages = await githubGetLanguages(repo.languages_url);
        REPOSITORIES[index].languages = languages;
    });

    console.log(REPOSITORIES);

    listRepos.innerHTML = '';

    await REPOSITORIES.forEach(async (repo) => {
        let languages = '';
        if (repo.languages) {
            await Object.keys(repo.languages).map(function(lang) {
                console.log(lang, repo.languages[lang])
                languages += `
                    <span class="badge rounded-pill bg-primary">${lang} ${repo.languages[lang]}%</span>
                `;
            })
        }

        // repo.languages.forEach((tech, value) => {
        //     console.log(tech, value)
            languages += `
                <span class="badge rounded-pill bg-primary">teste</span>
            `;
        // });

        listRepos.innerHTML += `
        <tr>
            <td>
                <a href="${repo.html_url}" target="_blank">
                    ${repo.name}
                </a>
            </td>
            <td>
                ${repo.language}
            </td>
            <td>
                ${languages}
            </td>
        </tr>
        `;
    });
}

init();