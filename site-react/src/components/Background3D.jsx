import React from 'react'

const CUBES = [
  { size: 90, left: '6%', top: '18%', depth: 38, speed: 26 },
  { size: 56, left: '90%', top: '30%', depth: 70, speed: 18 },
  { size: 120, left: '84%', top: '72%', depth: 24, speed: 34 },
  { size: 44, left: '12%', top: '78%', depth: 60, speed: 22 }
]

export default function Background3D(){
  return (
    <div className="bg3d" aria-hidden="true">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-orb orb-c" />
      <div className="bg-floor" />
      {CUBES.map((c, i) => (
        <div key={i} className="bg-cube-wrap" style={{ left: c.left, top: c.top, '--depth': c.depth }}>
          <div className="bg-cube" style={{ '--size': c.size + 'px', '--speed': c.speed + 's' }}>
            {['front', 'back', 'right', 'left', 'top', 'bottom'].map(face => <span key={face} className={`face ${face}`} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
