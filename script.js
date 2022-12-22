const API_KEY = "91724c4e"

const searchInput = document.querySelector('.search-input')
const form = document.querySelector('form')
const movieList = document.getElementById('movie-list')

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`
const watchList = localStorage.getItem('watchList') || [];

form.addEventListener('submit', handleMovieSearch)

async function handleMovieSearch(event) {
    event.preventDefault()
    const movieTitle = searchInput.value
    const resp = await fetch(`${API_URL}s=${movieTitle}&plot=short`)
    const data = await resp.json()
    renderMoviesTemplate(data.Search)
    renderMoviesInfo(data.Search)
}

function renderMoviesTemplate(moviesArray) {
    let moviesHtml = ""
    moviesArray.forEach(el => moviesHtml += getMovieHtml(el))
    movieList.innerHTML = moviesHtml
}

async function renderMoviesInfo(moviesArray) {
    moviesArray.forEach(el => getMovieInfo(el))
}

async function getMovieInfo(movie) {
    const resp = await fetch(`${API_URL}i=${movie.imdbID}`)
    const data = await resp.json()
    document.getElementById(`info-${movie.imdbID}`).innerHTML = getMovieInfoHtml(data)
}

function getMovieInfoHtml(movieObject) {
    const {Title: title, Genre: genre, Year: year , imdbID} = movieObject
    const {Runtime: duration, imdbRating, Plot: plot} = movieObject
    return `<div class="movie-title">${title}</div>
            <div class="movie-genres">${genre}</div>
            <div class="year-duration-rating">
                <div class="movie-year">${year}</div>
                <div class="movie-duration">${duration}</div>
                <div class="movie-rating">
                    <img src="./movie-star-icon.png" alt="" class="movie-star-icon">
                    <div>${imdbRating}</div>
                </div>
            </div>
            <div class="movie-description">${plot}</div>
            <button class="watchlist add" data-imdbID="${imdbID}">Watchlist</button>`
}

function getMovieHtml(movieObject) {
    const {Title: title, Poster: poster, imdbID} = movieObject
    return `<div class="movie-container">
                        <img class="movie-poster" src="${poster}" alt="${title} movie poster">
                        <div class="movie-info" id="info-${imdbID}">
                                <div class="movie-title">${title}</div>
                        </div>
                    </div>`
}

document.addEventListener('click', handleClick)

function handleClick(event) {
    const dataSet = event.target.dataset
    if (dataSet.imdbid) {
        if (watchList.includes(dataSet.imdbid)) {
            console.log("Duplicate")
            return
        }
        watchList.push(dataSet.imdbid)
        console.log(watchList)
    }
}
