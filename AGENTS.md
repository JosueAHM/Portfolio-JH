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
│   ├── icons.svg              # SVG sprite para iconos (incluye external-link-icon)
│   └── *.webp                 # Imágenes de proyectos (desde public/)
├── src/
│   ├── assets/                # Imágenes estáticas (profile, etc.)
│   ├── components/            # Componentes React
│   │   ├── Sidebar/
│   │   │   └── Sidebar.jsx    # Sidebar fijo con scroll spy activo
│   │   ├── Header/
│   │   │   └── Header.jsx     # Barra superior con menú hamburguesa, toggle tema, contacto y selector de idioma
│   │   ├── Footer/
│   │   │   └── Footer.jsx     # Pie de página
│   │   └── Content/           # Secciones de contenido
│   │       ├── Presentation.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── Jobs.jsx       # Sección "Mis trabajos" con imágenes y enlaces
│   │       ├── SkillsSection.jsx # 6 categorías de habilidades con pills
│   │       ├── Experience.jsx # Timeline laboral con 3 experiencias
│   │       ├── ExperienceCard.jsx  # Card de experiencia con highlights y tags
│   │       └── Contact.jsx
│   ├── hooks/
│   │   ├── useActiveSection.js # Scroll spy con single observer + rootMargin
│   │   └── useInView.js         # Animaciones one-time al hacer scroll
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
| Token | Clase Tailwind | Dark | Light |
|-------|----------------|------|-------|
| `--color-bg-site` | `bg-bg-site` | `#262726` | `#F5F5F0` |
| `--color-secondary` | `bg-secondary` / `text-secondary` | `#1E1E1E` | `#FFFFFF` |
| `--color-primary` | `bg-primary` / `text-primary` | `#00BF63` | `#00BF63` |
| `--color-header-bg` | `bg-header-bg` | `#00BF63` | `#E6F7EE` |
| `--color-text-muted` | `text-text-muted` | `#D9D9D9` | `#4A4A4A` |
| `--color-text-dark` | `text-text-dark` | `#333333` | `#1A1A1A` |
| `--color-white` | `text-white` | `#FFFFFF` | `#1A1A1A` |
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
- Modo claro/oscuro con `[data-theme="light"]` sobreescribiendo variables CSS (persiste en `localStorage`)
- Botón de toggle tema en Header (sol/luna) que alterna `data-theme` en `<html>`
- Header con `bg-header-bg` (verde `#00BF63` en dark, verde pastel `#E6F7EE` en light) + `shadow-sm`
- Layout responsive: sidebar fijo en lg+ / menú hamburguesa integrado en el Header
- Hook `useActiveSection` scroll spy con single observer + `rootMargin: '-80px 0px -60% 0px'`
- Hook `useInView` para animaciones one-time de aparición al hacer scroll
- Proyectos con imagen (`image`) y enlace externo (`url`) opcionales como props de `ProjectCard`
- Cards de experiencia con `companyUrl` opcional para enlazar al sitio web de la empresa
- Skills y Experience externalizados a i18n (claves `skills.*`, `exp.*`)
- Botón de contacto con `bg-header-bg`, `border-primary` y `text-text-dark`
- Imágenes de proyectos almacenadas en `public/` y referenciadas como `/nombre.webp`
- Favicon SVG minimalista con texto `[JH]` en modo oscuro (`favicon.svg`)
