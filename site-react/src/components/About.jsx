import React from 'react'

export default function About(){
  return (
    <section id="about" className="about">
      <h2>Perfil</h2>
      <p>Estudiante avanzado de Ingeniería en Sistemas de Información (UTN FRLP, 85% aprobado) con perfil full stack. Trabajo de punta a punta: relevo la necesidad, la traduzco a un modelo de datos, desarrollo frontend y backend, integro APIs y llevo la solución a producción. En mi pasantía en el IPS desarrollé sobre un sistema modular en Django (15+ apps, 40+ endpoints REST) con procesos asíncronos, testing y despliegue. Manejo Python y JavaScript/TypeScript, frameworks de front y back, bases de datos relacionales y no relacionales, y herramientas de DevOps. Autónomo, con criterio técnico y de producto, y foco en construir soluciones que funcionen y sean mantenibles.</p>

      <h3 style={{marginTop:18}}>Datos</h3>
      <div className="personal-grid">
        <div>
          <strong>Ubicación</strong>
          <div>La Plata, Buenos Aires (y alrededores)</div>
        </div>
        <div>
          <strong>Teléfono</strong>
          <div>+54 2215703572</div>
        </div>
        <div>
          <strong>Email</strong>
          <div>juanmanuelsemper@gmail.com</div>
        </div>
        <div>
          <strong>Disponibilidad</strong>
          <div>Full time · híbrido · remoto · presencial</div>
        </div>
      </div>
    </section>
  )
}
