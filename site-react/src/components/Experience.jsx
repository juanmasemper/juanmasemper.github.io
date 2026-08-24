import React from 'react'
import { IconInline } from './Skills'

function LocalIcon({type}){
  const common = {width:36,height:36,viewBox:'0 0 24 24',xmlns:'http://www.w3.org/2000/svg',style:{display:'block'}}
  if(type==='school'){
    return (
      <svg {...common} aria-hidden>
        <path fill="currentColor" d="M12 2 1 7l11 5 11-5-11-5zm0 7.5L4 8.1V11l8 3.5 8-3.5V8.1L12 9.5z" />
      </svg>
    )
  }
  if(type==='university'){
    return (
      <svg {...common} aria-hidden>
        <path fill="currentColor" d="M12 2 2 7v2h2v9h4v-6h4v6h4V9h2V7l-10-5z" />
      </svg>
    )
  }
  if(type==='coderhouse'){
    return (
      <svg {...common} aria-hidden>
        <path fill="currentColor" d="M8.7 6.3 3 12l5.7 5.7 1.4-1.4L6.8 12l3.3-3.3-1.4-1.4zm6.6 0-1.4 1.4L17.2 12l-3.3 3.3 1.4 1.4L21 12l-5.7-5.7z" />
      </svg>
    )
  }
  if(type==='work'){
    return (
      <svg {...common} aria-hidden>
        <path fill="currentColor" d="M3 13v6h18v-6H3zm2 2h14v2H5v-2zM12 3 3 7v2h18V7l-9-4z" />
      </svg>
    )
  }
  return null
}

const EDU_ICON_MAP = {
  'Colegio del Centenario': 'school',
  'Universidad Tecnológica Nacional La Plata': 'university',
  'CoderHouse': 'coderhouse'
}

const WORK_ICON_MAP = {
  'IPS — Instituto de Previsión Social': 'work'
}

export default function Experience(){
  const education = [
    {title:'Bachiller en Cs. Sociales', where:'Colegio del Centenario', when:'2013 - 2018'},
    {title:'Ingeniería en Sistemas', where:'Universidad Tecnológica Nacional La Plata', when:'2019 - En curso'},
    {title:'Carrera de Desarrollador Frontend', where:'CoderHouse', when:'2025', diplomas: [
      {src:'/images/coderhouse-web.png', title:'Desarrollo Web'},
      {src:'/images/coderhouse-js.png', title:'Javascript'},
      {src:'/images/coderhouse-react.png', title:'React JS'}
    ]}
  ]
  const work = [
    {title:'Desarrollador de Software (pasantía)', where:'IPS — Instituto de Previsión Social', when:'oct. 2025 – jun. 2026', desc: 'Desarrollé sobre un sistema modular en Django (15+ apps, 40+ endpoints REST) con procesos asíncronos, testing y despliegue.'}
  ]
  return (
    <section id="experience" className="experience">
      <h2>Curriculum</h2>
      <div className="section-card">
        <h3>Educación</h3>
        <div className="project-grid">
          {education.map((e,i) => (
            <div className="project" key={e.title} style={{transitionDelay: `${i * 60}ms`}}>
              <div className="thumb" style={{flex:'0 0 100px',width:100,height:70,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:8}}>
                {EDU_ICON_MAP[e.where] ? <LocalIcon type={EDU_ICON_MAP[e.where]} /> : <IconInline name={e.where || e.title} />}
              </div>
              <div className="info">
                <strong>{e.title}</strong>
                <div className="desc">{e.where}</div>
                <div style={{marginTop:8,fontSize:13,opacity:.8}}>{e.when}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Diplomas as project-like thumbnails */}
        {education.filter(e=>e.diplomas).map(e=> (
          <div key={e.where+"-diplomas"} style={{marginTop:18}}>
            <h4 style={{marginBottom:10}}>{e.where} — Diplomas</h4>
            <div className="project-grid">
              {e.diplomas.map((d, idx) => (
                    <a key={d.src} className="project" href={d.src} target="_blank" rel="noreferrer" style={{transitionDelay:`${idx*40}ms`}}>
                      <div className="thumb" style={{position:'relative'}}>
                        <img src={d.src} alt={d.title} onError={(ev)=>{ev.currentTarget.onerror=null; ev.currentTarget.src='/images/coderhouse-diploma-1.svg'}} />
                        <div className="overlay"><span>{d.title} — {e.title}</span></div>
                      </div>
                      <div className="info"><strong>{d.title}</strong><div className="desc">{e.title}</div></div>
                    </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="section-card" style={{marginTop:20}}>
        <h3>Experiencia Laboral</h3>
        <div className="project-grid">
          {work.map((w,i)=> (
            <div className="project" key={w.title} style={{transitionDelay:`${i*60}ms`}}>
              <div className="thumb" style={{flex:'0 0 100px',width:100,height:70,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:8}}>
                  {WORK_ICON_MAP[w.where] ? <LocalIcon type={WORK_ICON_MAP[w.where]} /> : <IconInline name={w.where || w.title} />}
                </div>
              <div className="info">
                <strong>{w.title}</strong>
                <div className="desc">{w.where}</div>
                {w.desc && <div style={{marginTop:8,fontSize:13,opacity:.85}}>{w.desc}</div>}
                <div style={{marginTop:8,fontSize:13,opacity:.8}}>{w.when}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
