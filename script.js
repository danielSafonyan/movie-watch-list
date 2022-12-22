const API_KEY = "91724c4e"

const searchInput = document.querySelector('.search-input')
const form = document.querySelector('form')
const movieList = document.getElementById('movie-list')

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

form.addEventListener('submit', handleMovieSearch)

async function handleMovieSearch(event) {
    event.preventDefault()
    const movieTitle = searchInput.value
    const resp = await fetch(`${API_URL}s=${movieTitle}&plot=short`)
    const data = await resp.json()
    renderMovies(data.Search)
}

function renderMovies(moviesArray) {
    let moviesHtml = ""
    moviesArray.forEach(el => moviesHtml += getMovieHtml(el))
    movieList.innerHTML = moviesHtml
}

function getMovieHtml(movieObject) {
    console.log(movieObject)
    const {Title, Poster, Year} = movieObject
    return `<div class="movie-container">
                        <img class="movie-poster" src="${Poster}" alt="movie poster image">
                        <div class="movie-info">
                            <div class="title-row-container">
                                <div class="movie-title">${Title}</div>
                                <div class="movie-rating">
                                    <img src="./movie-star-icon.png" alt="" class="movie-star-icon">
                                    <div>8.1</div>
                                </div>
                            </div>
                            <div class="movie-year">${Year}</div>
                            <div class="movie-duration">117 min</div>
                            <div class="movie-genres">Action, Drama, Sci-fi</div>
                            
                            <div class="movie-description">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find
                            their creator.</div>
                            <div class="add-watchlist"><img src="./add-watchlist.png" alt=""><div>Watchlist</div></div>
                        </div>
                    </div>`
}