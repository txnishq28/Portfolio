import React from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Experiences from './Pages/Experience'
import Footer from './Pages/Footer'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};


export default App