import React from 'react'

export default function Projects(){
  const projects = [
    {title: 'CNEISI - Plataforma de inscripciones', desc: 'Congreso Nac. de Estudiantes de Ing. en Sistemas 2024', img: '/images/foto2.png', link: 'https://github.com/juanmasemper/cneisi'},
    {title: 'Agremiación Odontológica', desc: 'Proyecto para la materia de Diseño de Sistemas / demo', img: '/images/agremiacionOdontologica1.PNG', link: 'https://github.com/juanmasemper'}
  ]

  return (
    <section id="projects" className="portfolio">
      <h2>Proyectos</h2>
      <p>Puedes ver proyectos y demos en mi GitHub: <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">@juanmasemper</a></p>
      <div className="project-grid">
        {projects.map((p, i) => {
          const hasThumb = p.img && p.img.startsWith('/')
          return (
            <a key={p.title} className={`project ${hasThumb ? '' : 'no-thumb'}`} href={p.link} target="_blank" rel="noreferrer" style={{transitionDelay: `${i * 80}ms`}}>
              <div
                className={`thumb ${hasThumb ? '' : 'placeholder'}`}
                style={hasThumb ? {backgroundImage: `url(${p.img})`} : undefined}
                aria-hidden
              />
              <div className="info">
                <strong>{p.title}</strong>
                <div className="desc">{p.desc}</div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
