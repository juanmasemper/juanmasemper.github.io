import React, { useEffect, useState } from 'react'
import { LanguageContext, translations } from './i18n'
import Header from './components/Header'
import Background3D from './components/Background3D'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import VisitorCounter from './components/VisitorCounter'

function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-language') || 'es')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('portfolio-language', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{lang, t: translations[lang]}}>
      <div className="app">
        <div className="scroll-progress" aria-hidden="true" />
        <div className="spotlight" aria-hidden="true" />
        <Background3D />
        <Header theme={theme} lang={lang} onLanguageChange={setLang} onToggleTheme={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
        <main className="container">
          <div className="reveal"><Hero /></div>
          <div className="reveal"><Stats /></div>
          <div className="reveal section-card"><About /></div>
          <div className="reveal section-card"><Skills /></div>
          <div className="reveal section-card"><Experience /></div>
          <div className="reveal section-card"><Projects /></div>
          <div className="reveal section-card"><Contact /></div>
        </main>
        <footer className="footer">© {new Date().getFullYear()} Juan Manuel Semper <VisitorCounter /></footer>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
