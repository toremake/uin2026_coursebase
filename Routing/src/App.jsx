import './App.css'

// Importerer routing-komponenter fra react-router-dom
import { Routes, Route } from 'react-router-dom'

// Importerer de ulike sidene/komponentene våre
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoryLayout />}>
          <Route index element={<h1>Kategorier</h1>} />
          <Route path=':slug' element={<Categories />} />
          <Route path=':slug/:cat' element={<Category />} />
        </Route>
        <Route path='about' element={<About />} />
      </Routes>
    </Layout>

  )
}

export default App
