import React from 'react'
import { Link } from "react-router-dom";
import StartExploringPlaceholder from './StartExploringPlaceholder'
import Movie from './Movie'

export default function MovieList(props) {
    let message
    try {
        message = props.fetchedMovies.Error
    } catch {
        message = "Let's add some movies!"
    }
    
    let movieElems

    try {
        movieElems = props.fetchedMovies.Search.map(el => <Movie {...el} key={el.imdbID} />)
    } catch {
        movieElems = null
    }
    return (
        <main id="movie-list">
            {(!props.fetchedMovies || message) && <StartExploringPlaceholder message={message}/>}
            {movieElems}
        </main>
        )
}

