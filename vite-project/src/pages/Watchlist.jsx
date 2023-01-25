import React from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

export default function Watchlist(props) {
    return (
        <>
            <Header path='/' destination={'Search for movies'} curLocation={"My Watchlist"} />
            <MovieList />
        </>
        )
}
