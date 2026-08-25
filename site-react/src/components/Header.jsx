import React from 'react'
import { useLanguage } from '../i18n'

export default function Header({theme, lang, onLanguageChange, onToggleTheme}){
  const {t} = useLanguage()
  return (
    <header className="site-header">
      <a className="brand" href="#"><img src="/logo.png" alt="Juan Semper" /></a>
      <div className="header-actions">
        <nav className="nav">
        <a href="#">{t.nav.home}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#contact">{t.nav.contact}</a>
        </nav>
        <button className="language-toggle" type="button" onClick={() => onLanguageChange(lang === 'es' ? 'en' : 'es')} aria-label="Cambiar idioma">{lang.toUpperCase()}</button>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={t.theme.change}>{theme === 'dark' ? '☼' : '☾'}</button>
      </div>
    </header>
  )
}
