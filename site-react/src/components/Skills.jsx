import React from 'react'
import { useLanguage } from '../i18n'

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@9.18.0/icons/'

// [nombre, slug de simple-icons o null si solo lleva texto]
const TECH = {
  Languages: [['Python','python'],['Java','openjdk'],['JavaScript','javascript'],['TypeScript','typescript'],['PHP','php'],['SQL',null]],
  Backend: [['Django','django'],['Django REST Framework','django'],['Node.js','nodedotjs'],['Express','express'],['Flask','flask'],['Spring Boot','springboot'],['APIs REST',null],['GraphQL','graphql'],['Celery','celery'],['WebSockets',null]],
  Frontend: [['React','react'],['Angular','angular'],['Vue.js','vuedotjs'],['HTML','html5'],['CSS','css3'],['Sass','sass'],['Bootstrap','bootstrap'],['Tailwind CSS','tailwindcss'],['Figma','figma'],['Adobe XD','adobexd']],
  Data: [['PostgreSQL','postgresql'],['MySQL','mysql'],['MongoDB','mongodb'],['Firebase','firebase'],['SQL avanzado',null],['pandas','pandas'],['NumPy','numpy'],['Power BI','powerbi'],['Power Query',null],['Excel avanzado',null]],
  AI: [['IA generativa',null],['LLMs',null],['Prompt engineering',null],['Embeddings',null],['RAG',null],['ChromaDB',null],['Gemini','googlegemini'],['Hugging Face','huggingface'],['ROUGE',null],['TensorFlow','tensorflow'],['Keras','keras'],['PyTorch','pytorch']],
  DevOps: [['AWS','amazonaws'],['API Gateway','amazonapigateway'],['Docker','docker'],['Kubernetes','kubernetes'],['Git','git'],['GitHub','github'],['GitLab','gitlab'],['CI/CD',null],['Jenkins','jenkins'],['GitHub Actions','githubactions'],['pytest','pytest']]
}

const svgCache = new Map()

function IconInline({slug, name}){
  const [svg, setSvg] = React.useState(() => (slug && svgCache.get(slug)) || null)

  React.useEffect(() => {
    if(!slug) return
    if(svgCache.has(slug)){ setSvg(svgCache.get(slug)); return }
    let cancelled = false
    fetch(`${CDN_BASE}${slug}.svg`)
      .then(r => r.ok ? r.text() : null)
      .then(text => {
        if(!text || !text.trim().startsWith('<svg')) return
        svgCache.set(slug, text)
        if(!cancelled) setSvg(text)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [slug])

  if(!svg) return <span className="tech-icon fallback" aria-hidden="true">{name.slice(0,2).toUpperCase()}</span>
  return <span className="tech-icon svg" aria-hidden="true" dangerouslySetInnerHTML={{__html: svg}} />
}

export default function Skills(){
  const {t} = useLanguage()
  return (
    <section id="skills" className="skills">
      <h2>{t.skills.title}</h2>
      <div className="tech-grid">
        {Object.entries(TECH).map(([group, items]) => (
          <div key={group} className="tech-col tilt" data-tilt="5">
            <h3>{t.techGroups[group]}</h3>
            <ul>
              {items.map(([name, slug]) => (
                <li key={name} className="tech-item">
                  {slug ? <IconInline slug={slug} name={name} /> : <span className="tech-icon dot" aria-hidden="true" />}
                  <span className="tech-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="tag-row">
        <h3>{t.skills.functional}</h3>
        <ul className="tag-list">
          {t.functionalList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="tag-row">
        <h3>{t.skills.soft}</h3>
        <ul className="tag-list soft">
          {t.softList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
