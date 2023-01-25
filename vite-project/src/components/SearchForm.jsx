import React from 'react'

// {inputMove: '', setInputMovie: ƒ, setFetchedMovies: ƒ}

const API_KEY = "91724c4e"
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`

export default function SearchForm(props) {
    async function handleFormSubmit(e) {
        e.preventDefault()
        const movieTitle = props.inputMove.trim()
        try {
            const resp = await fetch(`${API_URL}s=${movieTitle}&plot=short`)
            const data = await resp.json()
            props.setFetchedMovies(data)
        } catch (err) {
            props.setFetchedMovies({
                Response: 'False',
                Error: err.message
            })
        }
    }
    return (
        <section>
        <form onSubmit={handleFormSubmit}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
                type="text" 
                className="search-input" 
                aria-label="Search for a movie input field" 
                placeholder="Search for a movie" 
                onChange={e => props.setInputMovie(e.target.value)}
            />
            <button className="search-btn" id="search-btn">Search</button>
        </form> 
        </section>
    )
}

// async function handleMovieSearch(event) {
//     event.preventDefault()
//     const movieTitle = searchInput.value.trim()
//     const resp = await fetch(`${API_URL}s=${movieTitle}&plot=short`)
//     const data = await resp.json()
//     recievedMovieList = data.Search
    
//     if (data.Search) {
//         renderMoviesTemplate(data.Search)
//         renderMoviesInfo(data.Search)
//     } else {
//         movieList.innerHTML = `<div class="start-exploring">Are you sure there is such a movie?</div>`
//     }
    
// }