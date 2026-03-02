import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path=":movie" element={<Movie />} /> 
    </Routes>

  )
}

export default App
