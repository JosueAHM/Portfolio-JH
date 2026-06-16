# Portfolio JH

Portfolio web personal de **Josué Holguín** — Full Stack Dev & UI Designer. Construido con React + Vite + Tailwind CSS v4.

## Tecnologías

- **React 19** + **Vite 8**
- **Tailwind CSS v4** con tokens de diseño personalizados (`@theme`)
- **Modo claro/oscuro** con `[data-theme="light"]` y persistencia en `localStorage`
- **i18next + react-i18next** para español / inglés
- **Google Fonts** — Poppins (headings), Source Sans 3 (body)
- **IntersectionObserver** para scroll spy y animaciones de entrada

## Comandos

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar ESLint
```

## Estructura

```
src/
├── components/
│   ├── Sidebar/          # Sidebar fijo con avatar, nav y redes
│   ├── Header/           # Barra superior con menú hamburguesa, contacto y selector de idioma
│   ├── Footer/           # Pie de página
│   └── Content/          # Secciones (Presentation, Jobs, Experience, etc.)
│       ├── Presentation.jsx
│       ├── Jobs.jsx       # Proyectos con ProjectCard
│       ├── ProjectCard.jsx
│       ├── Experience.jsx # Timeline laboral con ExperienceCard (enlaces a empresas)
│       ├── ExperienceCard.jsx
│       ├── SkillsSection.jsx
│       └── Contact.jsx
├── hooks/                # Custom hooks
│   ├── useActiveSection.js  # Scroll spy con IntersectionObserver (single observer + rootMargin)
│   └── useInView.js         # Animaciones de entrada al hacer scroll
├── locales/              # Traducciones (es.json, en.json)
├── assets/               # Imágenes estáticas
├── i18n.js               # Configuración de i18next
├── index.css             # Tailwind + tokens de diseño
├── App.jsx               # Layout principal
└── main.jsx              # Entry point
```
