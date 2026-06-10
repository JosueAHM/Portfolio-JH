# AGENTS.md — Portfolio JH

## Project Overview
Portfolio web personal desarrollado con React + Vite.

## Tech Stack
- **Framework:** React 19
- **Build tool:** Vite 8
- **Language:** JavaScript (JSX)
- **Styling:** CSS (CSS custom properties, nesting, prefers-color-scheme dark mode)
- **Linting:** ESLint 10 con plugins para React Hooks y React Refresh

## Project Structure
```
portfolio-JH/
├── public/
│   ├── favicon.svg
│   └── icons.svg          # SVG sprite para iconos
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos del layout y componentes
│   ├── index.css          # Estilos globales y variables CSS
│   └── main.jsx           # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Commands
```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar ESLint
```

## Conventions
- Componentes funcionales con hooks (sin clases)
- CSS con custom properties definidas en `:root` para theming (claro/oscuro)
- Media queries para responsive (breakpoint: 1024px)
- SVG icons usados mediante `<use href="/icons.svg#icon-id">`
- Imports de assets estáticos usando import (Vite resuelve la ruta)
