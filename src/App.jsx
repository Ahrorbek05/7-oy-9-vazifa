import React from 'react'
import Navbar from './component/Navbar'
import Trending from './component/Trending'
import Recomended from './component/Recomended'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Trending></Trending>
    <div className="container flex gap-8 mx-auto w-[1280px]">
      <Navbar></Navbar>
      <Recomended></Recomended>
    </div>
    </div>
  )
}

export default App