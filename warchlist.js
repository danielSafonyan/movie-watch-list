const watchList = JSON.parse(localStorage.getItem('watchList')) || {};
const movieList = document.getElementById('movie-list')


function renderMovies() {
    let movieListHtml = ""
    if (Object.keys(watchList).length === 0) {
        movieListHtml = `<div class="start-exploring">
                    
                    <div class="start-exploring-text">
                        <a href="./index.html"><img src="./start-exploring.png" alt="" class="start-exploring-img"> <br> Let’s add some movies!</a>
                    </div>
                </div>`
    }
    for (const [key, value] of Object.entries(watchList)) {
        movieListHtml += getMovieInfoHtml(value)
    }
    movieList.innerHTML = movieListHtml
}

renderMovies()

function getMovieInfoHtml(movieObject) {
    const {Title: title, Genre: genre, Year: year , imdbID} = movieObject
    const {Runtime: duration, imdbRating, Plot: plot, Poster: poster} = movieObject

    return `<div class="movie-container">
                        <img class="movie-poster" src="${poster}" alt="${title} movie poster">
                        <div class="movie-info" id="info-${imdbID}">
                                <div class="movie-title">${title}</div>
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
                                <button class="watchlist remove" id="btn-${imdbID}" data-imdbID="${imdbID}">Remove</button>
                        </div>
                    </div>`
}


document.addEventListener('click', handleClick)

function handleClick(event) {
    const dataSet = event.target.dataset
    if (dataSet.imdbid) {
        deleteFromWatchlist(dataSet.imdbid)
    }
}

function deleteFromWatchlist(imdbid) {
            delete watchList[imdbid]
            saveLocalStorage()
            renderMovies()
    }
    
function saveLocalStorage() {
    localStorage.setItem('watchList', JSON.stringify(watchList))
}