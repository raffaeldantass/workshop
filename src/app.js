const userImg = document.getElementById('data-picture');
const userName = document.getElementById('data-name');
const userEmail = document.getElementById('data-email');

const userRepos = document.getElementById('data-repositorie');
const userFollowing = document.getElementById('data-following');
const userFollowers = document.getElementById('data-followers');

function searchUser() {
  const user = document.getElementById('user-search').value;
  const url = `https://api.github.com/users/${user}`;

  fetch(url)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      userImg.src = data.avatar_url;
      userName.innerText = data.name;
      userEmail.innerText = data.email || 'Sem email';

      userRepos.innerText = data.public_repos;
      userFollowing.innerText = data.following;
      userFollowers.innerText = data.followers;
    })
    .catch(function(error) {
      console.log(error);
    }); 

    user.innerText = " ";
}
