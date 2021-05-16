
export class OmdbServices { 

    findMovieByTitle(title) {
        const url = `https://www.omdbapi.com/?s=${title}&apikey=c6a778af`;
        return fetch(url)
        .then(result => result.json())
        .catch(err =>  console.log(err))
    }
    

}
