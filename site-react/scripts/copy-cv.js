const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', '..', 'Curriculum Vitae - Semper Juan Manuel.pdf')
const destDir = path.join(__dirname, '..', 'public')
const dest = path.join(destDir, 'CV-Semper-Juan-Manuel.pdf')

try{
  if(!fs.existsSync(src)){
    console.warn('CV source not found at', src)
    process.exit(0)
  }
  if(!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive:true})
  fs.copyFileSync(src, dest)
  console.log('CV copied to', dest)
}catch(err){
  console.error('Failed to copy CV:', err.message)
}
