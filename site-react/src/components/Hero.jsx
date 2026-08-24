import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <img src="/images/JuanmaFoto.png" alt="Juan Semper" className="avatar"/>
      <h1>Juan Manuel Semper</h1>
      <p className="subtitle">DESARROLLADOR FULL STACK · PYTHON · JAVASCRIPT · REACT · REST APIS · SQL · DOCKER</p>
      <p className="meta">La Plata, Buenos Aires · Disponibilidad: full time · híbrido · remoto · presencial</p>
      <p className="cta"><a href="/CV-Semper-Juan-Manuel.pdf" download>Descargar CV</a></p>
      <div className="links" style={{marginTop:12}}>
        <a href="mailto:juanmanuelsemper@gmail.com">juanmanuelsemper@gmail.com</a> · <a href="https://www.linkedin.com/in/juan-manuel-semper/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}
