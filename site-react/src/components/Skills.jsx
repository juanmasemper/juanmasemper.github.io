import React from 'react'
import { useLanguage } from '../i18n'

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@9.18.0/icons/'
const SLUG_MAP = {
  'Vue.js':'vuedotjs',
  'Node.js/Express':'nodedotjs',
  'Django REST Framework':'django',
  'CI/CD':'githubactions',
  'PostgreSQL':'postgresql',
  'SQL':'mysql'
}

function slugFor(name){
  if(SLUG_MAP[name]) return SLUG_MAP[name]
  return name.toLowerCase().replace(/[^a-z0-9]/g,'')
}

function iconUrl(name){
  return `${CDN_BASE}${slugFor(name)}.svg`
}

// cache fetched SVGs to avoid refetch
const svgCache = new Map()

function IconInline({name}){
  const [svg, setSvg] = React.useState(() => svgCache.get(name) || null)

  React.useEffect(()=>{
    if(svgCache.get(name)) return setSvg(svgCache.get(name))
    const url = iconUrl(name)
    let cancelled = false
    fetch(url).then(r=> r.text()).then(text => {
      if(cancelled) return
      // replace fill colors with currentColor so CSS can recolor
      const replaced = text.replace(/fill=\"#[0-9a-fA-F]{3,6}\"/g,'fill="currentColor"')
      svgCache.set(name, replaced)
      setSvg(replaced)
    }).catch(()=>{
      setSvg(null)
    })
    return ()=>{ cancelled = true }
  },[name])

  if(!svg) return <span className="tech-icon svg fallback">{name.slice(0,2).toUpperCase()}</span>
  return <span className="tech-icon svg" dangerouslySetInnerHTML={{__html: svg}} />
}

export default function Skills(){
  const {t} = useLanguage()
  const tech = {
    Languages: ['Python','JavaScript','TypeScript','Java','PHP','SQL'],
    Frontend: ['React','Angular','Vue.js','HTML5','CSS3','Sass','Bootstrap','Tailwind'],
    Backend: ['Django','Django REST Framework','Node.js/Express','Flask','Spring Boot'],
    DataDevOps: ['PostgreSQL','MySQL','MongoDB','Docker','Kubernetes','CI/CD']
  }
  const soft = ['Resolución de problemas','Comunicación','Trabajo en equipo','Autonomía','Criterio de producto']
  const [availableIcons, setAvailableIcons] = React.useState(null)

  React.useEffect(()=>{
    // build unique list of tech names
    const all = Array.from(new Set(Object.values(tech).flat()))
    let cancelled = false
    ;(async ()=>{
      try{
        const checks = await Promise.all(all.map(async name => {
          if(svgCache.has(name)) return [name, true]
          try{
            const res = await fetch(iconUrl(name), {method: 'HEAD'})
            return [name, res && res.ok]
          }catch(_){
            return [name, false]
          }
        }))
        if(cancelled) return
        const ok = new Set(checks.filter(([_,v])=>v).map(([n])=>n))
        setAvailableIcons(ok)
      }catch(_){
        if(!cancelled) setAvailableIcons(new Set())
      }
    })()
    return ()=>{ cancelled = true }
  },[])
  return (
    <section id="skills" className="skills">
      <h2>{t.skills.title}</h2>
      <div className="tech-grid">
        {Object.entries(tech).map(([group, items]) => (
          <div key={group} className="tech-col">
            <h3>{t.techGroups?.[group] || group.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <ul>
              {items.slice().sort((a,b)=> a.localeCompare(b))
                .filter(it => {
                  // while availability is unknown, keep showing items (IconInline will fallback);
                  // once we computed availability, exclude names without icons
                  return availableIcons === null ? true : availableIcons.has(it)
                })
                .map(it => (
                <li key={it} className="tech-item">
                  <IconInline name={it} />
                  <span className="tech-name">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 style={{marginTop:18}}>{t.skills.soft}</h3>
      <ul className="soft-list">
        {soft.map(s=> <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}

export { IconInline }

