import React from 'react'
import { useLanguage } from '../i18n'

export default function Hero(){
  const {t} = useLanguage()
  return (
    <section className="hero">
      <img src="/images/JuanmaFoto.png" alt="Juan Semper" className="avatar"/>
      <h1>Juan Manuel Semper</h1>
      <p className="subtitle">{t.hero.subtitle}</p>
      <p className="meta">{t.hero.meta}</p>
      <p className="cta"><a href="/CV-Semper-Juan-Manuel.pdf" download>{t.hero.cv}</a></p>
      <div className="links" style={{marginTop:12}}>
        <a href="mailto:juanmanuelsemper@gmail.com">juanmanuelsemper@gmail.com</a> · <a href="https://www.linkedin.com/in/juan-manuel-semper/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}
