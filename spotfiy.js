const Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: '1f9b083ce70445d5aaa86e147ad46f7e',
    secret: 'fbadc9585f0f42a595b70a9e41697cf1'
})  


const getSpotifty = () =>{
    let song = x
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