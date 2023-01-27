import React, { useContext } from 'react'
import MovieContext from '../MovieContext'
import Header from '../components/Header'
import Movie from '../components/Movie'
import StartExploringPlaceholder from '../components/StartExploringPlaceholder'
import { getSearchApiUrl } from '../utils'

export default function Search() {
    const [inputMove, setInputMovie] = React.useState('')
    const [fetchedMovies, setFetchedMovies] = React.useState(null)
    const [placeHolder, setPlaceHolder] = React.useState({
        isShown: true,
        message: `Let's add some movies!`
    })
    
    async function handleFormSubmit(e) {
        e.preventDefault()
        console.log("Lookng for", inputMove)
        const resp = await fetch(getSearchApiUrl(inputMove))
        const data = await resp.json()
        if (data.results.length) {
            setFetchedMovies(data.results)
            setPlaceHolder({isShown: false, message: ''})
        } 
        else {
            setPlaceHolder({isShown: true, message: `We couldn't find ${inputMove} 😔`})
            setFetchedMovies(null)
        }
    }
    return (
        <>
            <Header path='/watchlist' destination={'My Watchlist'} curLocation={"Find your movie"} />
            <section>
                <form onSubmit={handleFormSubmit}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input 
                        type="text" 
                        className="search-input" 
                        value={inputMove}
                        aria-label="Search for a movie input field" 
                        placeholder="Search for a movie" 
                        onChange={e => setInputMovie(e.target.value)}
                    />
                    <button className="search-btn">Search</button>
                </form> 
            </section>
            {placeHolder.isShown && <StartExploringPlaceholder message={placeHolder.message}/>}

            <main className="main">
                {fetchedMovies && fetchedMovies.map(el => <Movie key={el.id} {...el}/>)}
            </main>
        </>
        )
}
