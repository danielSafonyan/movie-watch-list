const API_KEY = '5dcf7f28a88be0edc01bbbde06f024ab'

function getSearchApiUrl(keyword) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}`
}

function getMovieApiUrl(movieId) {
    return `
https://api.themoviedb.org/3/find/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
}

function getMoviePosterUrl(posterPath) {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
}

export { getSearchApiUrl, getMovieApiUrl, getMoviePosterUrl }