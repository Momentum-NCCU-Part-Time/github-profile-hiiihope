const gitAPI = "https://api.github.com/users/hiiihope";
const reposAPI = "https://api.github.com/users/hiiihope/repos";
let profile = document.getElementById('profile');
let profileInfo = document.getElementById('profile-info');

fetch(gitAPI)
  .then((response) => {
    return response.json();
  })
  .then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    // image-name-location huburl and usrname, set them

    let image = new Image();
    image.src = parsedJsonResponse.avatar_url;
    imageContainer.appendChild(image);

    //image not showing up

    let name = document.createElement("h1");
    name.innerText = parsedJsonResponse.name;
    header.appendChild(name);

    let location = document.createElement("div");
    location.innerText = "Location: " + parsedJsonResponse.location;
    bio.appendChild(location);

    let gitHub = document.createElement("div");
    gitHub.innerText = "GitHub URL: ";
    let gitUrl = document.createElement("a");
    gitUrl.innerHTML = parsedJsonResponse.login;
    gitUrl.href = parsedJsonResponse.html_url;
    bio.appendChild(gitHub);
    gitHub.appendChild(gitUrl);

    let usrName = document.createElement("div");
    usrName.innerText = "GitHub username: " + parsedJsonResponse.login;
    bio.appendChild(usrName);

  });

  //drawing blank on the info








  