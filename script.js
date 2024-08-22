// select all variables
let input = document.querySelector("input"),
    getBtn = document.querySelector(".getBtn"),
    RepoData = document.querySelector('.show-data');
// add event on button
getBtn.addEventListener('click', function () {
    getRepo()
})
async function getRepo() {
    if (input.value == '') {
        RepoData.innerHTML = '<p class="warning">Write A Valid UserName!!!</p>'
        input.focus()
    }
    else {
        let data = await fetch(`https://api.github.com/users/${input.value}/repos`);
        data = await data.json()
        console.log(data)
        RepoData.innerHTML = '';
        //   loop on data
        data.forEach(Repo => {
            // creat repo div
           let mainDiv = document.createElement('div');

           // fetch repo name
           let repoName = document.createTextNode(Repo.name);
           mainDiv.appendChild(repoName);
            RepoData.appendChild(mainDiv);

            // url of the repo

             let repoUrl = document.createElement('a');
             let repoUrlText  = document.createTextNode('visit');
             repoUrl.appendChild(repoUrlText);
             repoUrl.href = `https://github.com/${input.value}/${Repo.name}`
             repoUrl.setAttribute('target','_blank')
            mainDiv.appendChild(repoUrl)

            // created at 
            // let createdTime = document.createElement('p');
            // createdTime.appendChild(document.createTextNode(Repo.created_at ));
            // mainDiv.appendChild(createdTime)
            RepoData.appendChild(mainDiv)

        });
        
        input.focus()
    }

}