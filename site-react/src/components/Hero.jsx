import React from 'react'
import { useLanguage } from '../i18n'

const ORBIT = ['Python', 'Django', 'React', 'SQL', 'Docker', 'Celery', 'REST', 'IA']

export default function Hero(){
  const {t} = useLanguage()
  return (
    <section className="hero">
      <div className="hero-scene" data-tilt="9">
        <div className="hero-stage">
          <div className="orbit-tilt">
            <div className="orbit">
              {ORBIT.map((name, i) => {
                const angle = (360 / ORBIT.length) * i + 'deg'
                return (
                  <div key={name} className="orbit-slot" style={{'--a': angle}}>
                    <div className="orbit-face"><span className="orbit-chip">{name}</span></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="avatar-wrap">
            <img src="/images/JuanmaFoto.png" alt="Juan Manuel Semper" className="avatar" />
          </div>
        </div>
      </div>
      <h1>Juan Manuel Semper</h1>
      <p className="role">{t.hero.role}</p>
      <p className="subtitle">{t.hero.subtitle}</p>
      <p className="meta">{t.hero.meta}</p>
      <div className="cta">
        <a className="btn btn-primary" href="/CV-SEMPERJUANMANUEL.pdf" download>{t.hero.cv}</a>
        <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
      </div>
      <div className="links">
        <a href="mailto:juanmanuelsemper@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/juan-manuel-semper/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}
