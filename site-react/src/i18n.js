import React, { createContext, useContext } from 'react'

export const translations = {
  es: {
    nav: { home: 'Inicio', about: 'Perfil', skills: 'Stack', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      role: 'Estudiante avanzado de Ingeniería en Sistemas',
      subtitle: 'Desarrollo de Software · Análisis Funcional · Automatización · Datos e IA',
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
      text: 'Estudiante avanzado de Ingeniería en Sistemas de Información (UTN FRLP, 85% aprobado) con experiencia en desarrollo de soluciones web de punta a punta: relevamiento con usuarios, análisis de procesos, diseño e implementación de funcionalidades, pruebas y despliegue. Trabajo con Python, Django, APIs REST, bases de datos y automatización de procesos. Aplico herramientas de inteligencia artificial en el desarrollo, la investigación y la mejora de productividad, con conocimientos académicos de IA generativa y ciencia de datos. Me caracterizan el aprendizaje rápido, la iniciativa y la orientación a resolver necesidades concretas del negocio.',
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
      Backend: 'Backend e integración',
      Frontend: 'Frontend',
      Data: 'Datos y analítica',
      AI: 'IA y ciencia de datos',
      DevOps: 'Cloud, DevOps y calidad'
    },
    functionalList: ['Relevamiento de requerimientos', 'Análisis de procesos', 'Reglas de negocio', 'Documentación funcional', 'Validación con usuarios', 'Scrum', 'Kanban'],
    softList: ['Pensamiento analítico', 'Resolución de problemas', 'Comunicación con perfiles técnicos y no técnicos', 'Trabajo colaborativo', 'Proactividad', 'Autonomía', 'Aprendizaje autodidacta'],
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
            'Desarrollo full stack en un sistema modular Django de más de 15 aplicaciones y 40 endpoints REST: relevamiento de necesidades, lógica de negocio, frontend, backend y puesta en producción.',
            'Automatización de conciliación de archivos, cálculos por lote y notificaciones mediante tareas asíncronas con Celery; funcionalidades en tiempo real con WebSockets.',
            'Trabajo con datos críticos, validaciones, trazabilidad y generación automatizada de reportes; pruebas con pytest, contenedores Docker y control de versiones.',
            'Comunicación con áreas usuarias para comprender circuitos operativos, definir requerimientos y traducirlos en soluciones técnicas.'
          ]
        }
      ],
      educationItems: [
        { title: 'Ingeniería en Sistemas de Información', where: 'Universidad Tecnológica Nacional, FRLP', when: 'En curso · egreso estimado 2027', desc: '85% de la carrera aprobada. Programación, estructuras de datos, bases de datos, análisis y diseño de sistemas, arquitectura de software y ciencia de datos.', icon: 'university' },
        { title: 'Carrera de Desarrollador Frontend', where: 'CoderHouse', when: '2025', desc: 'HTML, CSS, JavaScript, React, diseño responsive, consumo de APIs y publicación de sitios.', icon: 'coderhouse' }
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
      role: 'Advanced Information Systems Engineering student',
      subtitle: 'Software Development · Functional Analysis · Automation · Data & AI',
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
      text: 'Advanced Information Systems Engineering student (UTN FRLP, 85% completed) with experience building end-to-end web solutions: gathering requirements with users, process analysis, designing and implementing features, testing and deployment. I work with Python, Django, REST APIs, databases and process automation. I use artificial intelligence tools in development, research and productivity, with academic knowledge of generative AI and data science. Defined by fast learning, initiative and a focus on solving concrete business needs.',
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
      Backend: 'Backend & integration',
      Frontend: 'Frontend',
      Data: 'Data & analytics',
      AI: 'AI & data science',
      DevOps: 'Cloud, DevOps & quality'
    },
    functionalList: ['Requirements gathering', 'Process analysis', 'Business rules', 'Functional documentation', 'User validation', 'Scrum', 'Kanban'],
    softList: ['Analytical thinking', 'Problem solving', 'Communication with technical and non-technical profiles', 'Teamwork', 'Proactivity', 'Autonomy', 'Self-directed learning'],
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
            'Full stack development on a modular Django system with 15+ applications and 40 REST endpoints: requirements gathering, business logic, frontend, backend and production release.',
            'Automated file reconciliation, batch calculations and notifications through asynchronous Celery tasks; real-time features with WebSockets.',
            'Worked with critical data, validations, traceability and automated report generation; testing with pytest, Docker containers and version control.',
            'Worked with user areas to understand operational flows, define requirements and turn them into technical solutions.'
          ]
        }
      ],
      educationItems: [
        { title: 'Information Systems Engineering', where: 'Universidad Tecnológica Nacional, FRLP', when: 'In progress · expected graduation 2027', desc: '85% of the degree completed. Programming, data structures, databases, systems analysis and design, software architecture and data science.', icon: 'university' },
        { title: 'Frontend Developer Career', where: 'CoderHouse', when: '2025', desc: 'HTML, CSS, JavaScript, React, responsive design, API consumption and site deployment.', icon: 'coderhouse' }
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
