import React from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App