require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require('fs')

/* debug against the actual URL.
var queryUrl = "https://rest.bandsintown.com/artists/Eminem/events?app_id=codingbootcamp";
console.log(queryUrl); 
*/
var getMeArtist = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("===================================");
            console.log("===================================");
            console.log("")
            console.log("Name of the artist: " + response.data[0].lineup[0]);
            console.log("Name of the venue: " + response.data[0].venue.name);
            console.log("Venue location: " + response.data[0].venue.city);
            console.log("Date of the Event: " + response.data[0].datetime);
            console.log("");
            console.log("===================================");
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

// read from .env file.
var mySpotiID = process.env.SPOTIFY_ID;
var mySpotiSECRET = process.env.SPOTIFY_SECRET;

var spotify = new Spotify({
    id: mySpotiID,
    secret: mySpotiSECRET
});

var getArtistName = function (artist) {
    return artist.name;
}

var getMySpotifySong = function (songName) {
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // debug against the actual data
        // console.log(data);
        // console.log(data.tracks.items[0]);
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {

            console.log("===================================");
            console.log("");
            console.log(i);
            console.log('Artist(s): ' + songs[i].artists.map(getArtistName));
            console.log('The song name: ' + songs[i].name);
            console.log('A preview link of the song from Spotify: ' + songs[i].preview_url);
            console.log('The album that the song is from: ' + songs[i].album.name);
            console.log("");
            console.log("===================================");
        }

    });
}

// Request with axios to the OMDB API with the movie Mr. Nobody
// var queryUrl2 = "http://www.omdbapi.com/?t=Mr.+Nobody&y=2009&apikey=d085ad58";

var getMyMovie = function (movie) {
    axios.get(
        "http://www.omdbapi.com/?t=" + movie + "&y=2009&apikey=d085ad58"
    ).then(
        function (response) {
            //console.log(response.data);
            console.log("===================================");
            console.log("");
            console.log("Title of the movie: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Released);
            console.log("IMDB Rating of the movie: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);
            console.log("");
            console.log("===================================");

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

var whatItsay = function () {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;

        var dataArr = data.split(',');
        if (dataArr.length == 2) {
            collect(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            collect(dataArr[0]);
        }
        //console.log(data);

    });
}

var collect = function (caseData, functionData) {
    switch (caseData) {
        case 'concert-this':
            getMeArtist(functionData);
            break;
        case 'spotify-this-song':
            getMySpotifySong(functionData);
            break;
        case 'movie-this':
            getMyMovie(functionData);
            break;
        case 'do-what-it-says':
            whatItsay(functionData);
        default:
            console.log('liri does not know that');
            break;
    }
}

var runThis = function (argOne, argTwo) {
    collect(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);