import React, { useEffect, useState } from 'react'
import { useLanguage } from '../i18n'

export default function VisitorCounter(){
  const {lang} = useLanguage()
  const [visits, setVisits] = useState(null)
  const code = 'juanmasemper'

  useEffect(() => {
    if(!code) return
    fetch(`https://${code}.goatcounter.com/counter/TOTAL.json`)
      .then(response => response.ok ? response.json() : null)
      .then(data => setVisits(data?.count || null))
      .catch(() => setVisits(null))
  }, [code])

  if(!code || !visits) return null
  return <span className="visitor-counter">{lang === 'es' ? 'Visitas' : 'Visits'}: {visits}</span>
}
