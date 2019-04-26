let axios = require('axios')

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
module.exports = {
    getMovie
}
