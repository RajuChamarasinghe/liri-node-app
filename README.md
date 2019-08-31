# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.  
### Overview
The user uses Liri to give different commands and request information. The terminal use by user to display the request information and responses from Liri.

Liri can take in one of the following commands through liri.js in the terminal.

##### Command 1.
```javascript
node liri.js concert-this '<artist/band name here>'
```
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal/bash:  

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")  

##### Command 2.
```javascript
node liri.js spotify-this-song '<song name here>'  
```
This will search the API ('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx') and need to install `node-spotify-api` package.  
This will show the following information about the song in your terminal/bash window:  

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

##### Command 3.  
```javascript
node liri.js movie-this '<movie name here>'  
```  
This will search the "(http://www.omdbapi.com/?t=" + movie + "&y=2009&apikey=yourapikey") use the `axios` package to retrieve data from the ** OMDB API **.  
This will output the folowing information to your terminal/bash window:  

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.  

##### Command 4.  
```javascript
node liri.js do-what-it-says
```  
Using the ** fs ** Node package, LIRI will take the text inside of `random.txt` and then use it to call one of LIRI's commands.  
- It should run spotify-this-song for "I Want it That Way," as follows the text in `random.txt`.
- Edit the text in `random.txt` to test out the feature for movie-this and concert-this.  

### Setup/Usage/How to  
##### Step 1.  
Create a folder and open the terminal/bash, and install all the npm packages.  
To get the `package.json`, in terminal/bash window install:  
```javascript
npm init
```  
##### Step 2.  
Save the following npm packages and install.  
In terminal/bash window save:
```javascript
npm install request axios node-spotify-api dotenv moment --save
```  
Install the saved packages.  
In terminal/bash window:  
```javascript
npm install
```  
##### Step 3.  
In terminal create the other files need.
```javascript
touch keys.js  
touch liri.js  
touch random.text
touch .gitignore  
touch .env  
```  
##### Step 4.  
Work on the `.gitignore` before push to resporitory. Open the `.gitignore` file and type the folowing.  
```javascript
node_modules
.DS_Store
.env
```  
##### Step 4.  
Open the `keys.js` and setup the spotify.  
```javascript
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```  
##### Step 5.  
Open the `.env` file and add the following to it, replacing the values with your API keys (no quotes) once you have them: 
```javascript
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```  
##### Step 6.  
Open the `liri.js` file work on the project. `liri.js` require the `dotenv,` `keys.js,` `axios,` `node-spotify-api` and `fs`.  
![alt text](https://recordit.co/mAY3cdMPYw.gif) 

### FAQ/Troubleshoot  
The switch statement which hold the different arguments from the user snd only run when user type the commands. All the responses are not available in APIs.









 






