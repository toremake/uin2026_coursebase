import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/characters/:id' element={<Character />} />
    </Routes>

  )
}

export default App
