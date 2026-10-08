import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n'

export default function Projects(){
  const {lang, t} = useLanguage()
  const projects = [
    {title: 'Plataforma de inscripciones CNEISI', desc: 'Congreso Nacional de Estudiantes de Ingeniería en Sistemas · 2024 · +500 inscripciones', descEn: 'National Congress of Systems Engineering Students · 2024 · 500+ registrations', detail: 'Plataforma full stack para 500+ inscripciones: modelado de datos, APIs REST, autenticación, panel de gestión y seguimiento de estados. Digitalización del proceso administrativo previamente gestionado en planillas.', detailEn: 'Full stack platform for 500+ registrations: data modeling, REST APIs, authentication, management panel and status tracking. Digitization of the administrative process previously handled in spreadsheets.', tags: ['Django', 'REST API', 'JavaScript'], img: '/images/foto2.png', link: 'https://github.com/juanmasemper/cneisi'},
    {title: 'Portfolio web personal', desc: 'React, JavaScript, HTML, CSS y Vercel · 2026', descEn: 'React, JavaScript, HTML, CSS and Vercel · 2026', detail: 'Sitio responsive desarrollado con React, JavaScript, HTML y CSS; componentes reutilizables y despliegue en Vercel.', detailEn: 'Responsive site built with React, JavaScript, HTML and CSS; reusable components and Vercel deployment.', tags: ['React', 'JavaScript', 'CSS'], img: '', link: 'https://juanmasemper-github-io-lac.vercel.app'},
    {title: 'JotaStore', desc: 'E-commerce de indumentaria urbana · Proyecto realizado para el curso de Desarrollador Front-end de CoderHouse', descEn: 'Urban fashion e-commerce · Project developed for the CoderHouse Front-end Developer course', detail: 'Tienda online con catálogo de productos, filtros, detalle de artículos y carrito de compras, realizada para el curso de Desarrollador Front-end de CoderHouse.', detailEn: 'Online store with a product catalog, filters, item details, and shopping cart, developed for the CoderHouse Front-end Developer course.', tags: ['React', 'Vite', 'E-commerce'], img: '/images/jotastore-image.png', link: 'https://ojotastore.vercel.app/'}
  ]
  const filters = [{key:'all', label:t.projects.all}, ...Array.from(new Set(projects.flatMap(project => project.tags)), tag => ({key:tag, label:tag}))]
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = filter === 'all' ? projects : projects.filter(project => project.tags.includes(filter))

  return (
    <section id="projects" className="portfolio">
      <h2>{t.projects.title}</h2>
      <p>{t.projects.intro} <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">@juanmasemper</a></p>
      <div className="project-filters" role="group" aria-label={t.projects.filterLabel}>
        {filters.map(currentFilter => (
          <button key={currentFilter.key} type="button" className={filter === currentFilter.key ? 'active' : ''} onClick={() => setFilter(currentFilter.key)}>{currentFilter.label}</button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((p, i) => {
          return (
            <button key={p.title} type="button" className="project project-button tilt" data-tilt="9" onClick={() => setSelectedProject(p)} style={{'--i': i}}>
              <div className={`thumb${p.img ? '' : ' generated'}`} style={p.img ? {backgroundImage: `url(${p.img})`} : undefined} aria-hidden="true">{!p.img && '</>'}</div>
              <div className="info">
                <strong>{p.title}</strong>
                <div className="desc">{lang === 'en' && p.descEn ? p.descEn : p.desc}</div>
                <div className="project-tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </button>
          )
        })}
      </div>
      {selectedProject && createPortal(
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={event => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label={t.projects.close} onClick={() => setSelectedProject(null)}>×</button>
            {selectedProject.img && <img src={selectedProject.img} alt="" />}
            <h3 id="project-modal-title">{selectedProject.title}</h3>
            <p>{lang === 'en' && selectedProject.detailEn ? selectedProject.detailEn : selectedProject.detail}</p>
            <div className="project-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            {selectedProject.link && <a className="modal-link" href={selectedProject.link} target="_blank" rel="noreferrer">{t.projects.link}</a>}
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
