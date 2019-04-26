let axios = require('axios')

const getMovie =() =>{
    console.log('hi')
    axios.get(`http://www.omdbapi.com/?t=${x}&apikey=trilogy`)
    .then(({ data: { Title, Year, Rated, Runtime, Director, Genre } }) => {
        console.log(`
      Title: ${Title}
      Year: ${Year}
      Rated: ${Rated}
      Runtime: ${Runtime}
      Director: ${Director}
      Genre: ${Genre}
      `)
}).catch(e => console.log(e))
}
module.exports = {
    getMovie
}
