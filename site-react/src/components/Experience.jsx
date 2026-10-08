import React from 'react'
import { useLanguage } from '../i18n'

const DIPLOMAS = [
  {src: '/images/coderhouse-react.png', title: 'Desarrollo Web'},
  {src: '/images/coderhouse-js.png', title: 'JavaScript'},
  {src: '/images/coderhouse-web.png', title: 'React JS'}
]

function EduIcon({type}){
  const path = type === 'university'
    ? 'M12 2 2 7v2h2v9h4v-6h4v6h4V9h2V7l-10-5z'
    : 'M8.7 6.3 3 12l5.7 5.7 1.4-1.4L6.8 12l3.3-3.3-1.4-1.4zm6.6 0-1.4 1.4L17.2 12l-3.3 3.3 1.4 1.4L21 12l-5.7-5.7z'
  return <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={path} /></svg>
}

export default function Experience(){
  const {t} = useLanguage()
  return (
    <section id="experience" className="experience">
      <h2>{t.experience.title}</h2>

      <h3 className="sub">{t.experience.work}</h3>
      <div className="timeline">
        {t.experience.workItems.map(w => (
          <article key={w.title} className="timeline-item tilt" data-tilt="4">
            <span className="timeline-dot" aria-hidden="true" />
            <header>
              <div>
                <strong>{w.title}</strong>
                <div className="where">{w.where}</div>
              </div>
              <span className="when">{w.when}</span>
            </header>
            <ul>
              {w.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="sub">{t.experience.education}</h3>
      <div className="edu-grid">
        {t.experience.educationItems.map(e => (
          <article key={e.title} className="edu-card tilt" data-tilt="7">
            <div className="edu-icon"><EduIcon type={e.icon} /></div>
            <div>
              <strong>{e.title}</strong>
              <div className="where">{e.where}</div>
              <div className="when">{e.when}</div>
              {e.desc && <p>{e.desc}</p>}
            </div>
          </article>
        ))}
      </div>

      <h3 className="sub">CoderHouse — {t.experience.diplomas}</h3>
      <div className="diploma-grid">
        {DIPLOMAS.map(d => (
          <a key={d.src} className="diploma tilt" data-tilt="8" href={d.src} target="_blank" rel="noreferrer">
            <img src={d.src} alt={`${t.experience.diplomas}: ${d.title}`} onError={ev => { ev.currentTarget.onerror = null; ev.currentTarget.src = '/images/coderhouse-diploma-1.svg' }} />
            <span>{d.title}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
