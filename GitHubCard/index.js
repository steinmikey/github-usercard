import axios from "axios"; // why did I have to add this for axios to be defined?

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards");

const gitAPI = axios
  .get("https://api.github.com/users/steinmikey")
  .then((res) => {
    // console.log(res);
    // console.log(res.data);
    const user = addUser(res.data);
    cards.appendChild(user);
  })
  .catch((err) => console.error(err));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// addUser(gitAPI);

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
//

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function addUser({ name, login, location, html_url, followers, following, bio }) {
  //create elements
  const card = document.createElement("div");
  const userImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const usersUsername = document.createElement("p");
  const cLocation = document.createElement("p");
  const profile = document.createElement("p");
  const gitAddress = document.createElement("a");
  const cFollowers = document.createElement("p");
  const cFollowing = document.createElement("p");
  const cBio = document.createElement("p");

  //create hierarchy
  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(usersUsername);
  cardInfo.appendChild(cLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(gitAddress);
  cardInfo.appendChild(cFollowers);
  cardInfo.appendChild(cFollowing);
  cardInfo.appendChild(cBio);

  //add classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  usersUsername.classList.add("username");

  //assign text
  userName.textContent = name;
  usersUsername.textContent = login;
  cLocation.textContent = location;
  gitAddress.textContent = html_url;
  cFollowers.textContent = followers;
  cFollowing.textContent = following;
  cBio.textContent = bio;

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
