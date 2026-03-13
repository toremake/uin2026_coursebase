import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Teams from './pages/Teams'
import Type from './pages/Type'
import SearchResults from './pages/SearchResults'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='teams' element={<Teams />} />
        <Route path='types/:type' element={<Type/>} />
        <Route path='searchresults' element={<SearchResults />}>
          <Route path=':pokemon' element={<h1>Pokemon fra Search</h1>} />
        </Route>
        <Route path='pokemons' element={<Outlet />}>
          <Route path=':pokemon' element={<Pokemon />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
