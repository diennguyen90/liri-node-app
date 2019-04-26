require("dotenv").config();
const keys = require("./key.js");
const Spotify = require('node-spotify-api');
const axios = require('axios')
// Couldnt get the module exports to work
// const myMovie = require('./movies.js')
// const mySpoift = requre('./spotify.js)
// const myBand = require('./concert.js)

var spotify = new Spotify({
    id: '1f9b083ce70445d5aaa86e147ad46f7e',
    secret: 'fbadc9585f0f42a595b70a9e41697cf1'
})  
let getThis = process.argv[2]
let x = process.argv.splice(3, process.argv.length).join(' ')

const getMovie = () =>{
    let movie = x
    if(movie === ''){
        movie = 'Mr. Nobody,'
    }
    axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=trilogy`)
    .then(r => {
        console.log(x)
        // console.log(r.data)
        console.log(`
      Title: ${r.data.Title}
      Year: ${r.data.Year}
      IMBD: ${r.data.imbdRating}
      Rotten Tomatoes: ${r.data.Ratings[1].Value}
      Country: ${r.data.Country}
      Language: ${r.data.Language}
      Plot: ${r.data.Plot}
      Actors: ${r.data.Actors}
      `)
}).catch(e => console.log(e))
    
}

const getConcert = _ =>{
    axios.get(`https://rest.bandsintown.com/artists/${x}/events?app_id=codingbootcamp`)
        .then(r => {
            let data = r.data
            // console.log(data[0].venue)
            // console.log(r.data[0].venue)
            for(let i = 0;i < data.length;i++){
                console.log(`
                Venue: ${data[i].venue.name}
                Location: ${data[i].venue.city}, ${data[i].venue.country}
                `)
            }
        }).catch(e => console.log(e))
}

const getSpotifty = () =>{
    let song = x
    if (song === ''){
        song = 'The Sign Ace of Base'
    }
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // console.log(data.tracks.items)
        let res = data.tracks.items
        console.log(res.artists)
        for(let i = 0;i <i <res.length;i++){
            // having issue with returning artist objects
            // need to fix
      console.log(`
      Artist: ${res[i].artists}
      Name: ${res[i].name}
      Link: ${res[i].external_urls.spotify}
      Album: ${res[i].album.name}
      `); 
        }
      });
}

switch(getThis){
    case'concert-this':
    getConcert();
    break
    case 'spotify-this':
    getSpotifty();
    break
    case 'movie-this':
    getMovie();
    break
}