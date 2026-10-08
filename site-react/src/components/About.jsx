import React from 'react'
import { useLanguage } from '../i18n'

export default function About(){
  const {t} = useLanguage()
  const items = [
    [t.about.location, t.about.locationValue],
    [t.about.phone, '+54 9 221 570-3572'],
    [t.about.email, 'juanmanuelsemper@gmail.com'],
    [t.about.availability, t.about.availabilityValue],
    [t.about.languages, t.about.languagesValue]
  ]
  return (
    <section id="about" className="about">
      <h2>{t.about.title}</h2>
      <p className="lead">{t.about.text}</p>
      {t.about.text2 && <p className="lead" style={{marginTop:14}}>{t.about.text2}</p>}
      <div className="info-grid">
        {items.map(([label, value]) => (
          <div key={label} className="info-card tilt" data-tilt="8">
            <strong>{label}</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
