import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonial.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
    
  )
}

export default App