import React, { useContext } from 'react'
import Header from '../components/Header'
import Movie from '../components/Movie'
import MovieContext from '../MovieContext'
import StartExploringPlaceholder from '../components/StartExploringPlaceholder'

function isEmpty(object) {
    console.log(Object.keys(object).length === 0)
    return Object.keys(object).length === 0
}

export default function Watchlist(props) {
    const { savedMovies } = useContext(MovieContext)
    console.log(savedMovies)
    const [placeHolder, setPlaceHolder] = React.useState({
        isShown: isEmpty(savedMovies),
        message: `Let's add some movies!`
    })
    
    return (
        <>
            <Header path='/' destination={'Search for movies'} curLocation={"My Watchlist"} />
            {placeHolder.isShown && <StartExploringPlaceholder message={placeHolder.message}/>}
            {!isEmpty(savedMovies) && Object.values(savedMovies).map(el => <Movie {...el} key={el.id}/>)}
        </>
        )
}
