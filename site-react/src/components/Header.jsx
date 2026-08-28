import React, { useState } from 'react'
import { useLanguage } from '../i18n'

export default function Header({theme, lang, onLanguageChange, onToggleTheme}){
  const {t} = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(){
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#"><img src="/logo.png" alt="Juan Semper" /></a>
      <div className="header-actions">
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={handleNavClick}>{t.nav.home}</a>
        <a href="#about" onClick={handleNavClick}>{t.nav.about}</a>
        <a href="#projects" onClick={handleNavClick}>{t.nav.projects}</a>
        <a href="#contact" onClick={handleNavClick}>{t.nav.contact}</a>
        </nav>
        <button className="language-toggle" type="button" onClick={() => onLanguageChange(lang === 'es' ? 'en' : 'es')} aria-label="Cambiar idioma">{lang.toUpperCase()}</button>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={t.theme.change}>{theme === 'dark' ? '☼' : '☾'}</button>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(open => !open)} aria-label="Abrir menú" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
