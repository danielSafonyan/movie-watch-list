import React from 'react'

export default function(props) {
    const { Title: title, Year: year, imdbID, Poster: poster } = props
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
    }, [movieData])

//     async function getMovieInfo(imdbID) {
//     const API_KEY = "91724c4e"
//     const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`
//     console.log(`${API_URL}i=${imdbID}`)
//     const resp = await fetch(`${API_URL}i=${imdbID}`)
//     const data = await resp.json()
//     return data
// }

    return (
    <div className="movie-container">
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
    <button className="watchlist" id="btn-tt0145487" data-imdbid="tt0145487">Watchlist</button></div>
</div>)
}

// {
//     "Title": "Spider-Man: Homecoming",
//     "Year": "2017",
//     "imdbID": "tt2250912",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
// }

<div class="movie-container">
    <img class="movie-poster" src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" alt="Spider-Man movie poster" />
    <div class="movie-info" id="info-tt0145487"><div class="movie-title">Spider-Man</div>
    <div class="movie-genres">Action, Adventure, Sci-Fi</div>
    <div class="year-duration-rating">
    <div class="movie-year">2002</div>
    <div class="movie-duration">121 min</div>
    <div class="movie-rating">
    <img src="./movie-star-icon.png" alt="" class="movie-star-icon" />
    <div>7.4</div>
    </div>
    </div>
    <div class="movie-description">After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.</div>
    <button className="watchlist add" id="btn-tt0145487" data-imdbid="tt0145487">Watchlist</button></div>
</div>