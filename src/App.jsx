import React from 'react';
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import './css/App.css';

const App = () => {
  return(
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App;
