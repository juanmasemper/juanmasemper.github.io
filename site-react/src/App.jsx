import React, { useEffect, useState } from 'react'
import { LanguageContext, translations } from './i18n'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'
import VisitorCounter from './components/VisitorCounter'

function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-language') || 'es')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => localStorage.setItem('portfolio-language', lang), [lang])

  return (
    <LanguageContext.Provider value={{lang, t: translations[lang]}}>
    <div className="app">
      <Header theme={theme} lang={lang} onLanguageChange={setLang} onToggleTheme={() => setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')} />
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
      <footer className="footer">© {new Date().getFullYear()} Juan Manuel Semper <VisitorCounter /></footer>
    </div>
    </LanguageContext.Provider>
  )
}

export default App
