import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieContext from './MovieContext';

import Search from './pages/Search'
import Watchlist from './pages/Watchlist'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: '/watchlist',
    element: <Watchlist />
  }
]);

export default function App() {
  const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) || {})
  
  function handleMovieClick(movieObject) {
    setSavedMovies(prev => {
      const newState = {...prev}
      if (movieObject.id in newState) {
        delete newState[movieObject.id]
      } else {
        newState[movieObject.id] = movieObject
      }
      localStorage.setItem('movies', JSON.stringify(newState))
      return newState
    })
  }

  return (
    <MovieContext.Provider value={{savedMovies, handleMovieClick}}>
      <RouterProvider router={router}>
      </RouterProvider>
    </MovieContext.Provider>
  )
}