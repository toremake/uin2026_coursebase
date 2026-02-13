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

function App() {

  return (
    
    // Layout er et "wrapper"-komponent
    // Den inneholder typisk header, navbar, footer osv, alstå alt som skal være LIKT på alle sidene
    // Alt inni <Layout> vises inni denne strukturen
    <Layout>
      
      {/* Routes brukes for å definere alle routene i appen */}
      <Routes>

        {/* Index route = startsiden ("/") */}
        {/* Når path er "/" rendres Home */}
        <Route index element={<Home />} />

        {/* Parent route for /categories */}
        {/* Når vi går til /categories brukes CategoryLayout */}
        <Route path='categories' element={<CategoryLayout />}>

          {/* Index route for /categories */}
          {/* Når path er /categories rendres Categories inni CategoryLayout */}
          <Route index element={<Categories />} />

          {/* Dynamisk route */}
          {/* :slug er en URL-parameter */}
          {/* Eksempel: /categories/sport */}
          {/* Da vil slug = "sport" */}
          <Route path=':slug' element={<Category />} />

        </Route>

        {/* Route for /about */}
        <Route path='about' element={<About />} />

      </Routes>

    </Layout>

  )
}

export default App
