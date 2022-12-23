const API_KEY = "91724c4e"

const searchInput = document.querySelector('.search-input')
const form = document.querySelector('form')
const movieList = document.getElementById('movie-list')
let recievedMovieList

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`
const watchList = JSON.parse(localStorage.getItem('watchList')) || {};

form.addEventListener('submit', handleMovieSearch)

async function handleMovieSearch(event) {
    event.preventDefault()
    const movieTitle = searchInput.value
    const resp = await fetch(`${API_URL}s=${movieTitle}&plot=short`)
    const data = await resp.json()
    recievedMovieList = data.Search
    
    if (data.Search) {
        renderMoviesTemplate(data.Search)
        renderMoviesInfo(data.Search)
    } else {
        movieList.innerHTML = `<div class="start-exploring">Are you sure there is such a movie?</div>`
    }
    
}

function renderMoviesTemplate(moviesArray) {
    let moviesHtml = ""
    moviesArray.forEach(el => moviesHtml += getMovieHtml(el))
    movieList.innerHTML = moviesHtml
}

async function renderMoviesInfo(moviesArray) {
    moviesArray.forEach(async el => {
        const movieData = await getMovieInfo(el.imdbID)
        document.getElementById(`info-${el.imdbID}`).innerHTML = getMovieInfoHtml(movieData)
    })
}

async function getMovieInfo(imdbID) {
    console.log(imdbID)
    const resp = await fetch(`${API_URL}i=${imdbID}`)
    const data = await resp.json()
    return data
}

function getMovieInfoHtml(movieObject) {
    const {Title: title, Genre: genre, Year: year , imdbID} = movieObject
    const {Runtime: duration, imdbRating, Plot: plot} = movieObject
    const watchListClass = imdbID in watchList ? 'remove' : 'add'
    const watchListText = imdbID in watchList ? 'Remove' : 'Watchlist'
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
            <button class="watchlist ${watchListClass}" id="btn-${imdbID}" data-imdbID="${imdbID}">${watchListText}</button>`
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

async function handleClick(event) {
    const dataSet = event.target.dataset
    if (dataSet.imdbid) {
       await editWatchlist(dataSet.imdbid)
}

async function editWatchlist(imdbid) {
    const btn = document.getElementById(`btn-${imdbid}`)
    if (imdbid in watchList) {
            delete watchList[imdbid]
            btn.classList.add('add')
            btn.classList.remove('remove')
            btn.textContent = 'Watchlist'
            return
        } else {
            watchList[imdbid] = await getMovieInfo(imdbid)
            btn.classList.remove('add')
            btn.classList.add('remove')
            btn.textContent = 'Remove'
        }}
    saveLocalStorage()
}

function saveLocalStorage() {
    localStorage.setItem('watchList', JSON.stringify(watchList))
}
