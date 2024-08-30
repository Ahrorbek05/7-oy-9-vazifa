import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Trending from './component/Trending'
import Recomended from './component/Recomended'
import './App.css'
import SavedMovies from './SavedMovies'

function App() {
  return (
    <Router>
      <div className='container'>
        <Trending />
        <div className="container flex gap-8 mx-auto w-[1280px]">
          <Navbar />
          <Recomended />
          <Routes>
            <Route path='/SavedMovies' element={<SavedMovies />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
