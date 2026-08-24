import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'

function App(){
  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="reveal">
          <Hero />
        </div>

        <div className="reveal section-card" style={{marginTop:20}}>
          <About />
        </div>
        <div className="reveal section-card" style={{marginTop:20}}>
          <Skills />
        </div>
        <div className="reveal section-card" style={{marginTop:20}}>
          <Experience />
        </div>
        <div className="reveal section-card" style={{marginTop:20}}>
          <Projects />
        </div>
        <div className="reveal section-card" style={{marginTop:20}}>
          <Contact />
        </div>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Juan Manuel Semper</footer>
    </div>
  )
}

export default App
