import React from 'react'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'

export default function Search() {
    const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) || {})
    const [inputMove, setInputMovie] = React.useState('')
    const [fetchedMovies, setFetchedMovies] = React.useState(null)
    return (
        <>
            <Header path='/watchlist' destination={'My Watchlist'} curLocation={"Find your movie"} />
            <SearchForm 
                inputMove={inputMove}
                setInputMovie={setInputMovie}
                setFetchedMovies={setFetchedMovies}
            />
            <MovieList 
            fetchedMovies={fetchedMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            />
        </>
        )
}
