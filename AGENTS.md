# AGENTS.md — Portfolio JH

## Project Overview
Portfolio web personal desarrollado con React + Vite.

## Tech Stack
- **Framework:** React 19
- **Build tool:** Vite 8
- **Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS v4 (con `@theme` para tokens de diseño)
- **Fonts:** Poppins (headings) + Source Sans 3 (body) via Google Fonts
- **i18n:** i18next + react-i18next (español / inglés)
- **Linting:** ESLint 10 con plugins para React Hooks y React Refresh

## Project Structure
```
portfolio-JH/
├── public/
│   ├── favicon.svg
│   └── icons.svg              # SVG sprite para iconos
├── src/
│   ├── assets/                # Imágenes estáticas (profile, etc.)
│   ├── components/            # Componentes React
│   │   ├── Sidebar/
│   │   │   └── Sidebar.jsx    # Sidebar fijo con avatar, nav y redes
│   │   ├── Header/
│   │   │   └── Header.jsx     # Barra superior con contacto y selector de idioma
│   │   ├── Footer/
│   │   │   └── Footer.jsx     # Pie de página
│   │   └── Content/           # Secciones de contenido
│   │       ├── Presentation.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── Jobs.jsx       # Sección "Mis trabajos"
│   │       ├── Habilities.jsx
│   │       ├── Experience.jsx
│   │       └── Contact.jsx
│   ├── locales/
│   │   ├── es.json            # Traducciones español
│   │   └── en.json            # Traducciones inglés
│   ├── App.jsx                # Componente principal (layout + contenido)
│   ├── App.css                # Estilos de componentes (botones, etc.)
│   ├── i18n.js                # Configuración de i18next
│   ├── index.css              # Tailwind + tokens de diseño + base
│   └── main.jsx               # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── AGENTS.md
└── README.md
```

## Design Tokens (Tailwind v4 `@theme`)
| Token | Clase Tailwind | Valor |
|-------|----------------|-------|
| `--color-bg-site` | `bg-bg-site` | `#262726` |
| `--color-secondary` | `bg-secondary` / `text-secondary` | `#1E1E1E` |
| `--color-primary` | `bg-primary` / `text-primary` | `#00BF63` |
| `--color-text-muted` | `text-text-muted` | `#D9D9D9` |
| `--color-text-dark` | `text-text-dark` | `#333333` |
| `--font-heading` | `font-heading` | `'Poppins', sans-serif` |
| `--font-sans` | `font-sans` | `'Source Sans 3', sans-serif` |

## Commands
```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar ESLint
```

## Conventions
- Componentes funcionales con hooks (sin clases)
- Estilos con Tailwind CSS v4, clases utilitarias sobre CSS manual
- Tokens de diseño (colores, tipografía) definidos en `@theme` en `index.css`
- SVG icons usados mediante `<use href="/icons.svg#icon-id">` con `fill="currentColor"` para heredar color
- Textos traducibles mediante `<Trans i18nKey="key" />` o `t('key')`
- Archivos de traducción en `src/locales/{idioma}.json`
- Layout responsive: sidebar fijo en lg+ / menú hamburguesa en móvil
