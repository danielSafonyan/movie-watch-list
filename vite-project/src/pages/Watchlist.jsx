import React from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

export default function Watchlist(props) {
    const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) || {})
    return (
        <>
            <Header path='/' destination={'Search for movies'} curLocation={"My Watchlist"} />
            <MovieList 
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            />
        </>
        )
}
