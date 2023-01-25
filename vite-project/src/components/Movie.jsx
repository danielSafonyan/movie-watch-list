import React from 'react'

export default function(props) {
    console.log(props)
    const { Title: title, Year: year, imdbID, Poster: poster, inWatchlist } = props
    const [ movieData, setMovieData ] = React.useState({
        title,
        year,
        imdbID,
        poster,
        genre: '',
        duration: '',
        rating: '',
        description: '',
    })

    const watchlistIcon = inWatchlist ?  <i className="fa-solid fa-video-slash"></i> : <i className="fa-solid fa-video"></i> 
    const watchlistText = (inWatchlist ? "Remove from " : "Add to ") + "Watchlist"
    React.useEffect(() => {
        const API_KEY = "91724c4e"
        const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`
        fetch(`${API_URL}i=${imdbID}`)
            .then(resp => resp.json())
            .then(data => setMovieData(prev => {
                return {
                    ...prev,
                    genre: data.Genre,
                    duration: data.Runtime,
                    rating: data.imdbRating,
                    description: data.Plot,
                }
            }))
    }, [])

    function clickHandler(e) {
        const updatesStorage = { ...props.savedMovies }
        console.log(inWatchlist)
        if (inWatchlist) {
            delete updatesStorage[imdbID] 
        } else {
            updatesStorage[imdbID] = movieData
        }
        
        props.setSavedMovies(updatesStorage)
        localStorage.setItem('movies', JSON.stringify(updatesStorage))
    }

    return (
    <div className="movie-container" data-movie={JSON.stringify(movieData)}>
            <img className="movie-poster" src={poster} />
            <div className="movie-info" id="info-tt0145487">
                <div className="movie-title">{title}</div>
                <div className="movie-genres">{movieData.genre}</div>
                <div className="year-duration-rating">
                <div className="movie-year">{year}</div>
                <div className="movie-duration">{movieData.duration}</div>
                <div className="movie-rating">
                    <i className="fa-solid fa-star"></i>
                    <div>{movieData.rating}</div>
                </div>
            </div>
            <div className="movie-description">{movieData.description}</div>
            <button className="watchlist" onClick={clickHandler}>{watchlistIcon} {watchlistText}</button>
    </div>
</div>)
}


