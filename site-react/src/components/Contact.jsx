import React, { useState } from 'react'
import { useLanguage } from '../i18n'

export default function Contact(){
  const {t} = useLanguage()
  const [form, setForm] = useState({name:'', email:'', phone:'', subject:'', message:''})
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  async function copyEmail(){
    await navigator.clipboard.writeText('juanmanuelsemper@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

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
      <h2>{t.contact.title}</h2>
      <p>La Plata, Buenos Aires · {t.contact.availability}</p>
      <p><strong>{t.about.phone}:</strong> <a href="tel:+542215703572">+54 221 5703572</a> · <a href="https://wa.me/542215703572" target="_blank" rel="noreferrer">{t.contact.whatsapp}</a></p>
      <p><strong>{t.about.email}:</strong> <a href="mailto:juanmanuelsemper@gmail.com">juanmanuelsemper@gmail.com</a> <button type="button" className="copy-email" onClick={copyEmail}>{copied ? t.contact.copied : t.contact.copy}</button></p>
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
          <button type="submit" disabled={status==='sending'}>{status==='sending' ? t.contact.sending : t.contact.send}</button>
          {status==='success' && <span className="msg ok">{t.contact.success}</span>}
          {status==='error' && <span className="msg err">{t.contact.error}</span>}
        </div>
      </form>
    </section>
  )
}
