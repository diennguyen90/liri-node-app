let axios = require('axios')



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

module.exports = getConcert