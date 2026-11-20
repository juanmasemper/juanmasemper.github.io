import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n'

export default function Projects(){
  const {lang, t} = useLanguage()
  const projects = [
    {
      title: 'EPSI · Sistema de gestión',
      desc: 'Gestión de pacientes, sesiones y pagos para Espacio Psi Interdisciplinario',
      descEn: 'Patient, session and payment management for Espacio Psi Interdisciplinario',
      detail: 'Aplicación web a medida que centraliza pacientes, sesiones, vencimientos y estados de pago. Incluye acceso privado por profesional, historial de actividad e integración con WhatsApp para la atención y la gestión de comprobantes. Desarrollada con Next.js y una base de datos libSQL, con despliegue en Vercel.',
      detailEn: 'Custom web application that brings together patients, sessions, due dates and payment statuses. Includes private access for each professional, an activity history and WhatsApp integration for inquiries and payment receipt management. Built with Next.js and a libSQL database, deployed on Vercel.',
      tags: ['Next.js', 'libSQL', 'WhatsApp'],
      previewLabel: 'EPSI',
      previewGradient: 'linear-gradient(135deg, #21170f, #65421e)',
      link: 'https://epsi-gestion.vercel.app/'
    },
    {
      title: 'Finance Flow',
      desc: 'Finanzas personales con registro de movimientos, filtros y gráficos',
      descEn: 'Personal finance app with transaction tracking, filters and charts',
      detail: 'Aplicación de finanzas personales para registrar movimientos, analizar gastos y organizar las finanzas del mes. Incluye registro e inicio de sesión, edición y eliminación de movimientos, filtros y gráficos. Desarrollada con Next.js, Better Auth, Prisma y PostgreSQL, con datos separados por cuenta.',
      detailEn: 'Personal finance application for tracking transactions, analyzing spending and organizing monthly finances. Includes sign-up and sign-in, transaction editing and deletion, filters and charts. Built with Next.js, Better Auth, Prisma and PostgreSQL, with separate data for each account.',
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      previewLabel: 'FF',
      previewGradient: 'linear-gradient(135deg, #07392e, #16866d)',
      link: 'https://argentina-financeflow.vercel.app/'
    },
    {
      title: 'Phi Asset Management · Monitor',
      desc: 'Monitor de acciones, CEDEARs y ETF con búsqueda y filtros por sector',
      descEn: 'Stock, CEDEAR and ETF monitor with search and sector filters',
      detail: 'Monitor financiero que transforma datos de una planilla Excel en una interfaz web para consultar acciones, CEDEARs y ETF. Incluye búsqueda por compañía o ticker, filtros por sector, ordenamiento, fichas de activos y vista compacta para celulares. Ofrece acceso con cuenta, interfaz en español e inglés e integración con Alpaca para consultar cotizaciones de los símbolos cubiertos.',
      detailEn: 'Financial monitor that turns Excel spreadsheet data into a web interface for browsing stocks, CEDEARs and ETFs. Includes company or ticker search, sector filters, sorting, asset details and a compact mobile view. Offers account-based access, Spanish and English interfaces and Alpaca integration for quotes on supported symbols.',
      tags: ['Python', 'JavaScript', 'HTML'],
      previewLabel: 'Φ',
      previewGradient: 'linear-gradient(135deg, #0b213e, #286596)',
      link: 'https://phi-monitor-acceso.vercel.app/'
    },
    {title: 'Plataforma de inscripciones CNEISI', desc: 'Congreso Nacional de Estudiantes de Ingeniería en Sistemas · 2024 · +500 inscripciones', descEn: 'National Congress of Systems Engineering Students · 2024 · 500+ registrations', detail: 'Plataforma full stack para 500+ inscripciones: modelado de datos, APIs REST, autenticación, panel de gestión y seguimiento de estados. Digitalización del proceso administrativo previamente gestionado en planillas.', detailEn: 'Full stack platform for 500+ registrations: data modeling, REST APIs, authentication, management panel and status tracking. Digitization of the administrative process previously handled in spreadsheets.', tags: ['Django', 'REST API', 'JavaScript'], img: '/images/foto2.png', link: 'https://github.com/juanmasemper/cneisi'},
    {title: 'EPSI · Linktree personalizado', desc: 'Página de enlaces y contacto a medida para Espacio Psi Interdisciplinario · City Bell y La Plata', descEn: 'Custom link and contact page for Espacio Psi Interdisciplinario · City Bell and La Plata', detail: 'Página responsive tipo Linktree, diseñada a medida para EPSI. Reúne sus redes sociales y permite elegir una especialidad para contactar a cada profesional por WhatsApp o correo. Identidad visual propia, animaciones y despliegue en Vercel.', detailEn: 'Responsive Linktree-style page built for EPSI. Brings together its social profiles and lets visitors choose a specialty to contact each professional via WhatsApp or email. Custom visual identity, animations and Vercel deployment.', tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'], img: '/images/epsi-preview.png', previewFit: 'contain', link: 'https://epsi-citybell-laplata.vercel.app/'},
    {title: 'Portfolio web personal', desc: 'React, JavaScript, HTML, CSS y Vercel · 2026', descEn: 'React, JavaScript, HTML, CSS and Vercel · 2026', detail: 'Sitio responsive desarrollado con React, JavaScript, HTML y CSS; componentes reutilizables y despliegue en Vercel.', detailEn: 'Responsive site built with React, JavaScript, HTML and CSS; reusable components and Vercel deployment.', tags: ['React', 'JavaScript', 'CSS'], img: '/images/portfolio-preview.png', previewFit: 'contain', previewBackground: '#080b19', link: 'https://juanmasemper-github-io-lac.vercel.app'},
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
              <div className={`thumb${p.img ? '' : ' generated'}`} style={p.img ? {backgroundImage: `url(${p.img})`, ...(p.previewFit ? {backgroundSize: p.previewFit, backgroundRepeat: 'no-repeat', backgroundColor: p.previewBackground || '#15110e'} : {})} : p.previewGradient ? {backgroundImage: p.previewGradient} : undefined} aria-hidden="true">{!p.img && (p.previewLabel || '</>')}</div>
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
            {selectedProject.img && <img src={selectedProject.img} alt={selectedProject.title} style={selectedProject.previewFit ? {height: 'auto', objectFit: selectedProject.previewFit} : undefined} />}
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
