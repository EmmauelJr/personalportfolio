import React from 'react'
import { Hero } from './section/Hero'
import { About } from './section/About'
import { Projects } from './section/Projects'
import { Experience } from './section/Experience'
import { Testimonials } from './section/Testimonials'
import { Contact } from './section/Contact'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App