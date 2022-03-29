import React from 'react';
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './css/App.css';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return(
    <>
      <Header />
      <Nav />
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