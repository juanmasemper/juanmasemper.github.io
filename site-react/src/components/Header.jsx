import React, { useState } from 'react'
import { useLanguage } from '../i18n'

export default function Header({theme, lang, onLanguageChange, onToggleTheme}){
  const {t} = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#"><img src="/logo.png" alt="Juan Semper" /></a>
      <div className="header-actions">
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" onClick={close}>{t.nav.home}</a>
          <a href="#about" onClick={close}>{t.nav.about}</a>
          <a href="#skills" onClick={close}>{t.nav.skills}</a>
          <a href="#experience" onClick={close}>{t.nav.experience}</a>
          <a href="#projects" onClick={close}>{t.nav.projects}</a>
          <a href="#contact" onClick={close}>{t.nav.contact}</a>
        </nav>
        <button className="icon-btn language-toggle" type="button" onClick={() => onLanguageChange(lang === 'es' ? 'en' : 'es')} aria-label={t.language.change}>{lang.toUpperCase()}</button>
        <button className="icon-btn theme-toggle" type="button" onClick={onToggleTheme} aria-label={t.theme.change}>{theme === 'dark' ? '☼' : '☾'}</button>
        <button className="icon-btn menu-toggle" type="button" onClick={() => setMenuOpen(open => !open)} aria-label={t.menu.open} aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
