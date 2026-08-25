import React, { createContext, useContext } from 'react'

export const translations = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', contact: 'Contacto' },
    hero: { subtitle: 'DESARROLLADOR FULL STACK · PYTHON · JAVASCRIPT · REACT · REST APIS · SQL · DOCKER', meta: 'La Plata, Buenos Aires · Disponibilidad: full time · híbrido · remoto · presencial', cv: 'Descargar CV' },
    about: { title: 'Perfil', text: 'Estudiante avanzado de Ingeniería en Sistemas de Información (UTN FRLP, 85% aprobado) con perfil full stack. Trabajo de punta a punta: relevo la necesidad, la traduzco a un modelo de datos, desarrollo frontend y backend, integro APIs y llevo la solución a producción. En mi pasantía en el IPS desarrollé sobre un sistema modular en Django (15+ apps, 40+ endpoints REST) con procesos asíncronos, testing y despliegue. Manejo Python y JavaScript/TypeScript, frameworks de front y back, bases de datos relacionales y no relacionales, y herramientas de DevOps. Autónomo, con criterio técnico y de producto, y foco en construir soluciones que funcionen y sean mantenibles.', data: 'Datos', location: 'Ubicación', phone: 'Teléfono', email: 'Email', availability: 'Disponibilidad', availabilityValue: 'Full time · híbrido · remoto · presencial' },
    skills: { title: 'Stack técnico', soft: 'Habilidades blandas' },
    experience: { title: 'Curriculum', education: 'Educación', diplomas: 'Diplomas', work: 'Experiencia Laboral', course: 'Carrera de Desarrollador Frontend', ongoing: 'En curso' },
    projects: { title: 'Proyectos', intro: 'Puedes ver proyectos y demos en mi GitHub:', all: 'Todos', filterLabel: 'Filtrar proyectos por tecnología', link: 'Ver página relacionada ↗', close: 'Cerrar detalle' },
    contact: { title: 'Contacto', availability: 'Disponibilidad: full time · híbrido / remoto · presencial', whatsapp: 'WhatsApp', copy: 'Copiar', copied: 'Copiado', send: 'Enviar mensaje', sending: 'Enviando...', success: 'Mensaje enviado', error: 'Error al enviar. Intenta luego.' },
    theme: { change: 'Cambiar tema' }
  },
  en: {
    nav: { home: 'Home', about: 'About me', projects: 'Projects', contact: 'Contact' },
    hero: { subtitle: 'FULL STACK DEVELOPER · PYTHON · JAVASCRIPT · REACT · REST APIS · SQL · DOCKER', meta: 'La Plata, Buenos Aires · Availability: full time · hybrid · remote · on-site', cv: 'Download CV' },
    about: { title: 'Profile', text: 'Advanced Information Systems Engineering student (UTN FRLP, 85% completed) with a full stack profile. I work end to end: understand the need, translate it into a data model, build frontend and backend, integrate APIs and deliver the solution to production. During my internship at IPS I worked on a modular Django system (15+ apps, 40+ REST endpoints) with asynchronous processes, testing and deployment. I work with Python and JavaScript/TypeScript, frontend and backend frameworks, relational and non-relational databases, and DevOps tools. Autonomous, with technical and product judgment, focused on building working and maintainable solutions.', data: 'Details', location: 'Location', phone: 'Phone', email: 'Email', availability: 'Availability', availabilityValue: 'Full time · hybrid · remote · on-site' },
    skills: { title: 'Technical stack', soft: 'Soft skills' },
    experience: { title: 'Resume', education: 'Education', diplomas: 'Certificates', work: 'Work Experience', course: 'Frontend Developer Career', ongoing: 'In progress' },
    projects: { title: 'Projects', intro: 'See projects and demos on my GitHub:', all: 'All', filterLabel: 'Filter projects by technology', link: 'View related page ↗', close: 'Close details' },
    contact: { title: 'Contact', availability: 'Availability: full time · hybrid / remote · on-site', whatsapp: 'WhatsApp', copy: 'Copy', copied: 'Copied', send: 'Send message', sending: 'Sending...', success: 'Message sent', error: 'Could not send. Try again later.' },
    theme: { change: 'Change theme' }
  }
}

export const LanguageContext = createContext({ lang: 'es', t: translations.es })
export function useLanguage(){ return useContext(LanguageContext) }
