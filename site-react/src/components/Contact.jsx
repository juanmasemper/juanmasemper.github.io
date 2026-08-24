import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', phone:'', subject:'', message:''})
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm(prev=> ({...prev, [e.target.name]: e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('https://formspree.io/f/xwpkqdvb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(document.getElementById('contactForm'))
      })
      if(res.ok){
        setStatus('success')
        setForm({name:'', email:'', phone:'', subject:'', message:''})
      } else {
        const data = await res.json()
        setStatus(data.error || 'error')
      }
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>La Plata, Buenos Aires · Disponibilidad: full time · híbrido / remoto</p>
      <p><strong>Teléfono:</strong> +54 221 5703572</p>
      <p><strong>Email:</strong> <a href="mailto:juanmanuelsemper@gmail.com">juanmanuelsemper@gmail.com</a></p>
      <p>Redes: <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/juan-manuel-semper/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      <hr style={{marginTop:12,marginBottom:12}} />
      <form id="contactForm" onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <input name="name" placeholder="Tu nombre" required value={form.name} onChange={handleChange} />
          <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} />
        </div>
        <div className="row">
          <input name="email" type="email" placeholder="Correo" required value={form.email} onChange={handleChange} />
          <input name="subject" placeholder="Asunto" value={form.subject} onChange={handleChange} />
        </div>
        <textarea name="message" rows="6" placeholder="Mensaje" required value={form.message} onChange={handleChange} />
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <button type="submit" disabled={status==='sending'}>{status==='sending' ? 'Enviando...' : 'Enviar mensaje'}</button>
          {status==='success' && <span className="msg ok">Mensaje enviado ✅</span>}
          {status==='error' && <span className="msg err">Error al enviar. Intenta luego.</span>}
        </div>
      </form>
    </section>
  )
}
