const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function initReveals(){
  const items = document.querySelectorAll('.reveal')
  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'))
    return
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      io.unobserve(entry.target)
    })
  }, { threshold: 0.1 })
  items.forEach(el => io.observe(el))
}

// Expone puntero y scroll como variables CSS para el fondo 3D y el spotlight.
function initSceneVars(){
  const root = document.documentElement
  let frame = 0
  let pointer = { x: 0.5, y: 0.5, px: -999, py: -999 }

  const paint = () => {
    frame = 0
    const max = document.documentElement.scrollHeight - window.innerHeight
    root.style.setProperty('--mx', ((pointer.x - 0.5) * 2).toFixed(3))
    root.style.setProperty('--my', ((pointer.y - 0.5) * 2).toFixed(3))
    root.style.setProperty('--cx', pointer.px + 'px')
    root.style.setProperty('--cy', pointer.py + 'px')
    root.style.setProperty('--sy', String(window.scrollY))
    root.style.setProperty('--progress', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
  }
  const schedule = () => { if(!frame) frame = requestAnimationFrame(paint) }

  window.addEventListener('pointermove', e => {
    if(e.pointerType !== 'mouse') return
    pointer = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight, px: e.clientX, py: e.clientY }
    schedule()
  }, { passive: true })
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  schedule()
}

// Inclinación 3D por delegación: cualquier elemento con [data-tilt="grados"].
function initTilt(){
  let active = null

  const reset = el => {
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.classList.remove('is-tilting')
  }

  window.addEventListener('pointermove', e => {
    if(e.pointerType !== 'mouse') return
    const el = e.target instanceof Element ? e.target.closest('[data-tilt]') : null
    if(active && active !== el) reset(active)
    active = el
    if(!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const max = parseFloat(el.dataset.tilt) || 8
    el.style.setProperty('--rx', ((0.5 - py) * max * 2).toFixed(2) + 'deg')
    el.style.setProperty('--ry', ((px - 0.5) * max * 2).toFixed(2) + 'deg')
    el.style.setProperty('--gx', (px * 100).toFixed(1) + '%')
    el.style.setProperty('--gy', (py * 100).toFixed(1) + '%')
    el.classList.add('is-tilting')
  }, { passive: true })

  document.addEventListener('pointerleave', () => { if(active){ reset(active); active = null } })
}

export function initEffects(){
  if(typeof window === 'undefined') return
  initReveals()
  if(reduceMotion()) return
  initSceneVars()
  initTilt()
}
