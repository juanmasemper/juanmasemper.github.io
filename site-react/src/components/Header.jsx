import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="brand">Juan Semper</div>
      <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  )
}
