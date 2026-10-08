import React, { useState } from 'react'
import { useLanguage } from '../i18n'

export default function Contact(){
  const {t} = useLanguage()
  const ph = t.contact.placeholders
  const [form, setForm] = useState({name:'', email:'', phone:'', subject:'', message:''})
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  async function copyEmail(){
    await navigator.clipboard.writeText('juanmanuelsemper@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  function handleChange(e){
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('https://formspree.io/f/xwpkqdvb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.currentTarget)
      })
      if(res.ok){
        setStatus('success')
        setForm({name:'', email:'', phone:'', subject:'', message:''})
      } else {
        setStatus('error')
      }
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>{t.contact.title}</h2>
      <div className="contact-layout">
        <div className="contact-info">
          <p>{t.about.locationValue}</p>
          <p>{t.contact.intro}</p>
          <p><strong>{t.about.phone}:</strong> <a href="tel:+5492215703572">+54 9 221 570-3572</a> · <a href="https://wa.me/5492215703572" target="_blank" rel="noreferrer">{t.contact.whatsapp}</a></p>
          <p><strong>{t.about.email}:</strong> <a href="mailto:juanmanuelsemper@gmail.com">juanmanuelsemper@gmail.com</a> <button type="button" className="copy-email" onClick={copyEmail}>{copied ? t.contact.copied : t.contact.copy}</button></p>
          <p><strong>{t.contact.networks}:</strong> <a href="https://github.com/juanmasemper" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/juan-manuel-semper/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
        <form id="contactForm" onSubmit={handleSubmit} className="contact-form">
          <div className="row">
            <input name="name" placeholder={ph.name} aria-label={ph.name} required value={form.name} onChange={handleChange} />
            <input name="phone" placeholder={ph.phone} aria-label={ph.phone} value={form.phone} onChange={handleChange} />
          </div>
          <div className="row">
            <input name="email" type="email" placeholder={ph.email} aria-label={ph.email} required value={form.email} onChange={handleChange} />
            <input name="subject" placeholder={ph.subject} aria-label={ph.subject} value={form.subject} onChange={handleChange} />
          </div>
          <textarea name="message" rows="6" placeholder={ph.message} aria-label={ph.message} required value={form.message} onChange={handleChange} />
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={status==='sending'}>{status==='sending' ? t.contact.sending : t.contact.send}</button>
            {status==='success' && <span className="msg ok" role="status">{t.contact.success}</span>}
            {status==='error' && <span className="msg err" role="alert">{t.contact.error}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
