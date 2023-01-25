import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Search from './pages/Search'
import Watchlist from './pages/Watchlist'
import Error from './pages/Error'
import App from './App'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
