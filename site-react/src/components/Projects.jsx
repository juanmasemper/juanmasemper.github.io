import React, { useState } from 'react'
import { useLanguage } from '../i18n'

export default function Projects(){
  const {t} = useLanguage()
  const projects = [
    {title: 'CNEISI - Plataforma de inscripciones', desc: 'Congreso Nac. de Estudiantes de Ing. en Sistemas 2024', detail: 'Plataforma full stack para gestionar inscripciones y la organización del congreso.', tags: ['Django', 'REST API', 'JavaScript'], img: '/images/foto2.png', link: 'https://www.frlp.utn.edu.ar/llega-el-cneisi-la-utn-la-plata'},
    {title: 'Agremiación Odontológica', desc: 'Proyecto para la materia de Diseño de Sistemas / demo', detail: 'Sitio web de presentación para una institución profesional, con foco en claridad y navegación.', tags: ['HTML', 'CSS', 'JavaScript'], img: '/images/agremiacionOdontologica1.PNG', link: ''}
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
            <button key={p.title} type="button" className="project project-button" onClick={() => setSelectedProject(p)} style={{transitionDelay: `${i * 80}ms`}}>
              <div className="thumb" style={{backgroundImage: `url(${p.img})`}} aria-hidden />
              <div className="info">
                <strong>{p.title}</strong>
                <div className="desc">{p.desc}</div>
                <div className="project-tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </button>
          )
        })}
      </div>
      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={event => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label={t.projects.close} onClick={() => setSelectedProject(null)}>×</button>
            <img src={selectedProject.img} alt="" />
            <h3 id="project-modal-title">{selectedProject.title}</h3>
            <p>{selectedProject.detail}</p>
            <div className="project-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            {selectedProject.link && <a className="modal-link" href={selectedProject.link} target="_blank" rel="noreferrer">{t.projects.link}</a>}
          </div>
        </div>
      )}
    </section>
  )
}
