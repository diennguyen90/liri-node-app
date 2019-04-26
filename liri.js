require("dotenv").config();
const keys = require("./key.js");
const Spotify = require('node-spotify-api');
const axios = require('axios')
// const myMovie = require('./movies.js')

let getThis = process.argv[2]
let x = process.argv.splice(3, process.argv.length).join(' ')

const getMovie = () =>{
    axios.get(`http://www.omdbapi.com/?t=${x}&apikey=trilogy`)
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
            console.log(r.data)
        }).catch(e => console.log(e))
}

switch(getThis){
    case'concert-this':
    getConcert();
    break
    case 'spotify-this':
    spotifyThis();
    break
    case 'movie-this':
    getMovie();
    break
}