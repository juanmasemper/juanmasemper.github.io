import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n'

function CountUp({ value, suffix }){
  const ref = useRef(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const el = ref.current
    if(!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduce || !('IntersectionObserver' in window)){
      setShown(value)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if(!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = now => {
        const p = Math.min((now - start) / 1400, 1)
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if(p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])

  return <span ref={ref} className="stat-value">{shown}{suffix}</span>
}

export default function Stats(){
  const { t } = useLanguage()
  return (
    <div className="stats">
      {t.stats.map((s, i) => (
        <div key={s.label} className="stat tilt" data-tilt="12" style={{ '--i': i }}>
          <CountUp value={s.value} suffix={s.suffix} />
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
