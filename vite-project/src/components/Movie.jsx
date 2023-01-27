import React from 'react'
import { getMoviePosterUrl } from '../utils'

export default function(props) {
    console.log(props)
    const { title, overview, poster_path, release_date, vote_count, vote_average, } = props
    const inWatchlist = true
    const inWatchlistElem = inWatchlist ? <i class="fa-solid fa-bookmark"></i> : <i class="fa-regular fa-bookmark"></i>
    return (
         <div className="movie-container" data-movie={JSON.stringify(props)}>
            <img className="movie-poster" src={getMoviePosterUrl(poster_path)} />
            <div className="movie-info">
                 <div className="movie-title">{title}</div>
                 <div className="movie-year">{release_date.split('-')[0]}</div>
                 <div className="movie-description">{overview}</div>
                 <div className='rating'>
                    <i className="fa-solid fa-star"></i> {vote_average}&nbsp;&nbsp;
                    <i className="fa-regular fa-eye"></i> {vote_count}
                    </div>
                 
                 <button className="watchlist" onClick={() => console.log("Adding to favorite!")}>{inWatchlistElem}</button>
             </div>
         </div>
)
}

{/* <div className="movie-container" data-movie={JSON.stringify(movieData)}>
             <img className="movie-poster" src={movieData.poster} />
             <div className="movie-info" id="info-tt0145487">
                 <div className="movie-title">{movieData.title}</div>
                 <div className="movie-genres">{movieData.genre}</div>
                 <div className="year-duration-rating">
                 <div className="movie-year">{movieData.year}</div>
                 <div className="movie-duration">{movieData.duration}</div>
                 <div className="movie-rating">
                     <i className="fa-solid fa-star"></i>
                     <div>{movieData.rating}</div>
                 </div>
             </div>
             <div className="movie-description">{movieData.description}</div>
             <button className="watchlist" onClick={clickHandler}>{watchlistIcon} {watchlistText}</button>
     </div>
</div> */}
