const links = {
    github : 'WesleySanchesBahia',
    youtube :'UCTEBuGUDFzIBEpWu4DHKSMQ',
    facebook : 'wesley.sanches.505',
    instagram : 'wesleysanchesb',
    twitter : 'weesleysanches'
}

function chanceSocialMediaLinks(){
for(let li of socialLinks.children ){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`

}
}

chanceSocialMediaLinks()

function getGitHubProfileInfos(){

const url =  `https://api.github.com/users/${links.github}`

/* fetch vai na respota (url) e pegar os dados */
    fetch(url).then(response => response.json()).then(data => {
        username.textContent = data.name
        userbio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
        
    })

}
getGitHubProfileInfos()
