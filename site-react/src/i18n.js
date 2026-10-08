import React, { createContext, useContext } from 'react'

export const translations = {
  es: {
    nav: { home: 'Inicio', about: 'Perfil', skills: 'Stack', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      role: 'Desarrollador de Software · Ingeniería en Sistemas (UTN)',
      subtitle: 'Automatización · IA · Datos',
      meta: 'La Plata, Buenos Aires · Disponibilidad full time · presencial / híbrida / remota',
      cv: 'Descargar CV',
      contact: 'Hablemos'
    },
    stats: [
      { value: 15, suffix: '+', label: 'apps Django en un sistema modular' },
      { value: 40, suffix: '+', label: 'endpoints REST desarrollados' },
      { value: 500, suffix: '+', label: 'inscripciones en la plataforma CNEISI' },
      { value: 85, suffix: '%', label: 'de Ingeniería en Sistemas aprobada' }
    ],
    about: {
      title: 'Perfil profesional',
      text: 'Estudiante avanzado de Ingeniería en Sistemas de Información (UTN FRLP, 85% aprobado) con experiencia en desarrollo de software end-to-end, APIs REST, análisis funcional, automatización y datos. Aplico herramientas de IA al desarrollo, aprendizaje y resolución de problemas. Perfil proactivo y analítico, orientado a transformar necesidades del negocio en soluciones tecnológicas.',
      text2: 'Trabajo de punta a punta: relevamiento con usuarios, análisis de procesos, diseño e implementación de funcionalidades, pruebas y despliegue, con conocimientos académicos de IA generativa y ciencia de datos. Me caracterizan el aprendizaje rápido, la iniciativa y la orientación a resolver necesidades concretas del negocio.',
      data: 'Datos de contacto',
      location: 'Ubicación',
      locationValue: 'La Plata, Buenos Aires, Argentina',
      phone: 'Teléfono',
      email: 'Email',
      availability: 'Disponibilidad',
      availabilityValue: 'Full time · presencial / híbrida / remota',
      languages: 'Idiomas',
      languagesValue: 'Español nativo · Inglés intermedio'
    },
    skills: { title: 'Conocimientos técnicos', soft: 'Competencias', functional: 'Análisis funcional y metodologías' },
    techGroups: {
      Languages: 'Lenguajes',
      Backend: 'Backend',
      Frontend: 'Frontend',
      Data: 'Datos',
      AI: 'IA y automatización',
      DevOps: 'Cloud y DevOps'
    },
    functionalList: ['Relevamiento de requerimientos', 'Procesos de negocio', 'Reglas de negocio', 'Documentación funcional', 'Modelado de datos', 'Validación con usuarios', 'Scrum', 'Kanban'],
    softList: ['Pensamiento analítico', 'Resolución de problemas', 'Comunicación con usuarios', 'Comunicación con perfiles técnicos y no técnicos', 'Trabajo en equipo', 'Proactividad', 'Autonomía', 'Criterio de producto', 'Aprendizaje autónomo'],
    experience: {
      title: 'Experiencia y formación',
      work: 'Experiencia profesional',
      education: 'Formación académica',
      diplomas: 'Diplomas',
      workItems: [
        {
          title: 'Desarrollador de Software (Pasantía)',
          where: 'Instituto de Previsión Social (IPS), Provincia de Buenos Aires',
          when: 'Oct 2025 – Jun 2026',
          bullets: [
            'Desarrollo full stack en sistema modular Django (15+ aplicaciones, 40+ endpoints REST): relevamiento de requerimientos, implementación, pruebas con pytest y puesta en producción.',
            'Automatización de conciliaciones, cálculos, notificaciones y reportes con Celery; funcionalidades en tiempo real con WebSockets.',
            'Gestión de datos críticos, reglas de negocio y trazabilidad; PostgreSQL, Docker y Git.',
            'Comunicación con áreas usuarias para comprender circuitos operativos, definir requerimientos y traducirlos en soluciones técnicas.'
          ]
        }
      ],
      educationItems: [
        { title: 'Bachiller en Cs. Sociales', where: 'Colegio del Centenario', when: '2013 – 2018', icon: 'school' },
        { title: 'Ingeniería en Sistemas de Información', where: 'UTN FRLP', when: '85% aprobado · Abril 2019 – 2027 (estimado)', desc: 'Programación, estructuras de datos, bases de datos, análisis y diseño de sistemas, arquitectura de software y ciencia de datos.', icon: 'university' },
        { title: 'Desarrollo Frontend', where: 'CoderHouse', when: 'Agosto – Diciembre 2025', desc: 'HTML, CSS, JavaScript, React, diseño responsive, consumo de APIs y publicación de sitios.', icon: 'coderhouse' }
      ]
    },
    projects: { title: 'Proyectos destacados', intro: 'Más proyectos y demos en mi GitHub:', all: 'Todos', filterLabel: 'Filtrar proyectos por tecnología', link: 'Ver proyecto ↗', close: 'Cerrar detalle' },
    contact: {
      title: 'Contacto',
      intro: 'Disponibilidad full time · presencial / híbrida / remota',
      networks: 'Redes',
      whatsapp: 'WhatsApp',
      copy: 'Copiar',
      copied: 'Copiado',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado',
      error: 'Error al enviar. Intenta luego.',
      placeholders: { name: 'Tu nombre', phone: 'Teléfono', email: 'Correo', subject: 'Asunto', message: 'Mensaje' }
    },
    theme: { change: 'Cambiar tema' },
    language: { change: 'Cambiar idioma' },
    menu: { open: 'Abrir menú' }
  },
  en: {
    nav: { home: 'Home', about: 'Profile', skills: 'Stack', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: {
      role: 'Software Developer · Systems Engineering (UTN)',
      subtitle: 'Automation · AI · Data',
      meta: 'La Plata, Buenos Aires · Available full time · on-site / hybrid / remote',
      cv: 'Download CV',
      contact: 'Get in touch'
    },
    stats: [
      { value: 15, suffix: '+', label: 'Django apps in a modular system' },
      { value: 40, suffix: '+', label: 'REST endpoints built' },
      { value: 500, suffix: '+', label: 'registrations on the CNEISI platform' },
      { value: 85, suffix: '%', label: 'of the Systems Engineering degree completed' }
    ],
    about: {
      title: 'Professional profile',
      text: 'Advanced Information Systems Engineering student (UTN FRLP, 85% completed) with experience in end-to-end software development, REST APIs, functional analysis, automation and data. I apply AI tools to development, learning and problem solving. Proactive and analytical profile, focused on turning business needs into technology solutions.',
      text2: 'I work end to end: gathering requirements with users, process analysis, designing and implementing features, testing and deployment, with academic knowledge of generative AI and data science. Defined by fast learning, initiative and a focus on solving concrete business needs.',
      data: 'Contact details',
      location: 'Location',
      locationValue: 'La Plata, Buenos Aires, Argentina',
      phone: 'Phone',
      email: 'Email',
      availability: 'Availability',
      availabilityValue: 'Full time · on-site / hybrid / remote',
      languages: 'Languages',
      languagesValue: 'Spanish (native) · English (intermediate)'
    },
    skills: { title: 'Technical skills', soft: 'Core competencies', functional: 'Functional analysis & methodologies' },
    techGroups: {
      Languages: 'Languages',
      Backend: 'Backend',
      Frontend: 'Frontend',
      Data: 'Data',
      AI: 'AI & automation',
      DevOps: 'Cloud & DevOps'
    },
    functionalList: ['Requirements gathering', 'Business processes', 'Business rules', 'Functional documentation', 'Data modeling', 'User validation', 'Scrum', 'Kanban'],
    softList: ['Analytical thinking', 'Problem solving', 'Communication with users', 'Communication with technical and non-technical profiles', 'Teamwork', 'Proactivity', 'Autonomy', 'Product judgment', 'Self-directed learning'],
    experience: {
      title: 'Experience & education',
      work: 'Professional experience',
      education: 'Education',
      diplomas: 'Certificates',
      workItems: [
        {
          title: 'Software Developer (Internship)',
          where: 'Instituto de Previsión Social (IPS), Province of Buenos Aires',
          when: 'Oct 2025 – Jun 2026',
          bullets: [
            'Full stack development on a modular Django system (15+ applications, 40+ REST endpoints): requirements gathering, implementation, testing with pytest and production release.',
            'Automation of reconciliations, calculations, notifications and reports with Celery; real-time features with WebSockets.',
            'Management of critical data, business rules and traceability; PostgreSQL, Docker and Git.',
            'Worked with user areas to understand operational flows, define requirements and turn them into technical solutions.'
          ]
        }
      ],
      educationItems: [
        { title: 'Social Sciences High School Diploma', where: 'Colegio del Centenario', when: '2013 – 2018', icon: 'school' },
        { title: 'Information Systems Engineering', where: 'UTN FRLP', when: '85% completed · April 2019 – 2027 (expected)', desc: 'Programming, data structures, databases, systems analysis and design, software architecture and data science.', icon: 'university' },
        { title: 'Frontend Development', where: 'CoderHouse', when: 'August – December 2025', desc: 'HTML, CSS, JavaScript, React, responsive design, API consumption and site deployment.', icon: 'coderhouse' }
      ]
    },
    projects: { title: 'Featured projects', intro: 'More projects and demos on my GitHub:', all: 'All', filterLabel: 'Filter projects by technology', link: 'View project ↗', close: 'Close details' },
    contact: {
      title: 'Contact',
      intro: 'Available full time · on-site / hybrid / remote',
      networks: 'Social',
      whatsapp: 'WhatsApp',
      copy: 'Copy',
      copied: 'Copied',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent',
      error: 'Could not send. Try again later.',
      placeholders: { name: 'Your name', phone: 'Phone', email: 'Email', subject: 'Subject', message: 'Message' }
    },
    theme: { change: 'Change theme' },
    language: { change: 'Change language' },
    menu: { open: 'Open menu' }
  }
}

export const LanguageContext = createContext({ lang: 'es', t: translations.es })
export function useLanguage(){ return useContext(LanguageContext) }
