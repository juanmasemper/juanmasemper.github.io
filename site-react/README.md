# Juan Semper — Portfolio (React)

Proyecto React minimal creado con Vite. Para ejecutar localmente:

```bash
cd site-react
npm install
npm run dev
```

Notas:
- El PDF del CV permanece en la raíz: `Curriculum Vitae - Semper Juan Manuel.pdf`.
- Reemplaza el texto y las imágenes en `src/` según necesites.

Detalles y despliegue:

- Desarrollo: abre `http://localhost:5173` (o la URL que indique Vite) tras `npm run dev`.
- Producción (build):

```bash
cd site-react
npm run build
```

Esto genera la carpeta `dist/`. Para publicar en GitHub Pages puedes usar `gh-pages` o desplegar `dist` a cualquier hosting (Netlify, Vercel, Azure Static Web Apps).

- Activos: las imágenes usadas por la app están en `site-react/public/images/`. Si quieres añadir miniaturas, pon nuevas imágenes allí y referencia `/images/nombre.png`.

- Diplomas CoderHouse: he añadido placeholders SVG, pero puedes reemplazarlos por los diplomas reales que adjuntaste. Coloca los archivos en `site-react/public/images/` con estos nombres:

	- `coderhouse-react.png`  (React JS)
	- `coderhouse-js.png`    (Javascript)
	- `coderhouse-web.png`   (Desarrollo Web)

	Si no añades los PNG, la app mostrará los SVG placeholders existentes (`coderhouse-diploma-1.svg` / `coderhouse-diploma-2.svg`) como fallback.

- CV automático: el PDF original `Curriculum Vitae - Semper Juan Manuel.pdf` se mantiene en la raíz del repo. Cuando instales dependencias en `site-react`, un script copiará ese PDF a `site-react/public/` como `CV-Semper-Juan-Manuel.pdf` para que el enlace de descarga funcione correctamente:

```bash
cd site-react
npm install
```

El script `postinstall` ejecuta la copia. Si por alguna razón no se copia, puedes hacerlo manualmente:

Windows PowerShell:
```powershell
Copy-Item "..\Curriculum Vitae - Semper Juan Manuel.pdf" -Destination "public\CV-Semper-Juan-Manuel.pdf" -Force
```

Linux / macOS:
```bash
cp "../Curriculum\ Vitae\ -\ Semper\ Juan\ Manuel.pdf" public/CV-Semper-Juan-Manuel.pdf
```

- Microinteracciones: efectos hover en tarjetas de proyecto, nav con subrayado animado y reveals por scroll.

