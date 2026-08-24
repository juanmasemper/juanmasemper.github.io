// Simple reveal-on-scroll using IntersectionObserver
export function initReveals(){
  if(typeof window === 'undefined' || !('IntersectionObserver' in window)) return
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible')
        // small stagger support when inline style contains transitionDelay
        io.unobserve(entry.target)
      }
    })
  },{threshold: 0.12})
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el))
  // observe individual projects for staggered reveal
  document.querySelectorAll('.project').forEach((el, idx)=>{
    el.style.transitionDelay = (idx * 80) + 'ms'
    io.observe(el)
  })
}
