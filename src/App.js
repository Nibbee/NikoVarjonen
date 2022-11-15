import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';

const App = () => {
  return(
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;