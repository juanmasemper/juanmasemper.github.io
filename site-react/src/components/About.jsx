import React from 'react'
import { useLanguage } from '../i18n'

export default function About(){
  const {t} = useLanguage()
  return (
    <section id="about" className="about">
      <h2>{t.about.title}</h2>
      <p>{t.about.text}</p>

      <h3 style={{marginTop:18}}>{t.about.data}</h3>
      <div className="personal-grid">
        <div>
          <strong>{t.about.location}</strong>
          <div>La Plata, Buenos Aires (y alrededores)</div>
        </div>
        <div>
          <strong>{t.about.phone}</strong>
          <div>+54 2215703572</div>
        </div>
        <div>
          <strong>{t.about.email}</strong>
          <div>juanmanuelsemper@gmail.com</div>
        </div>
        <div>
          <strong>{t.about.availability}</strong>
          <div>{t.about.availabilityValue}</div>
        </div>
      </div>
    </section>
  )
}
