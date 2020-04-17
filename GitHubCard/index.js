/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

//console.log(axios.get('https://api.github.com/users/Patrick-G-Oliver'));

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
// Step 3: Create a function that accepts a single object as its only argument. (see above)
function userCardMaker(userObj) {
  // Elements
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const userGitHubPage = document.createElement('a');
  const followersTally = document.createElement('p');
  const followingTally = document.createElement('p');
  const bio = document.createElement('p');

  // Classes
  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // Content
  userImg.src = 'https://avatars3.githubusercontent.com/u/50932843?v=4';
  name.textContent = userObj.name;
  userName.textContent = userObj.login;
  location.textContent = `Location: ${userObj.location}`;
  profile.textContent = 'Profile: ';
  userGitHubPage.textContent = `${userObj.html_url}`;
  userGitHubPage.href = `${userObj.html_url}`;
  userGitHubPage.textConent = userObj.html_url;
  followersTally.textContent = `Followers: ${userObj.followers}`;
  followingTally.textContent = `Following: ${userObj.following}`;
  bio.textContent = `Bio ${userObj.bio}`;

  // Structure
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(userName);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profile);
  profile.appendChild(userGitHubPage);
  cardInfoDiv.appendChild(followersTally);
  cardInfoDiv.appendChild(followingTally);
  cardInfoDiv.appendChild(bio);

  return cardDiv;
};

// Where to place the components (once created):
const cards = document.querySelector('.cards');

// Step 1: Using axios, send a GET request (see above).
// Step 2: Inspect and study the data coming back (see above).
axios.get('https://api.github.com/users/Patrick-G-Oliver')

// To handle successful transfer/recept of data from the server:
.then( (response) => {

// To render the data visible in the console:
  console.log('response', response.data)

// Step 4: Pass the data received from Github into your function,
// create a new component, and add it to the DOM as a child of .cards
 cards.appendChild(userCardMaker(response.data))
})
// To handle errors in the receipt of data from the server:
.catch(err => {
  console.log('Something\'s wrong!', err) 
});

// Step 5: Get at least 5 different Github usernames and add them as individual strings to the friendsArray below. Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.(see above)

const friendsArray = [
  'tetondan', 
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

friendsArray.forEach( (nameDatum) => {
  axios.get(`https://api.github.com/users/${nameDatum}`)
  .then( (response) => {
    console.log('friend response', response.data)
    const friendData = response.data
    const friendInfo = userCardMaker(friendData)
    cards.appendChild(friendInfo)
  })
 .catch(err => {
   console.log('Something else is wrong!', err)
 }) 
}); 

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
