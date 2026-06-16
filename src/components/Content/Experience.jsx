import { useTranslation } from 'react-i18next'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    id: 'funiber',
    role: 'Desarrollador Web / Diseñador UX',
    company: 'FUNIBER',
    date: 'Jun 2024 – Mayo 2026',
    location: 'Guayaquil',
    highlights: [
      'Desarrollo de aplicaciones web con React, Vue.js y TypeScript enfocadas en experiencia de usuario',
      'Implementación de soluciones backend en PHP para sistemas escalables',
      'Diseño de interfaces centradas en el usuario para sistemas internos',
      'Creación de wireframes y prototipos interactivos',
      'Validación de flujos funcionales con pruebas de concepto',
      'Gestión de entornos con Docker y Linux',
      'Control de versiones con Git',
      'Implementación de CMS (Drupal, WordPress, Strapi, Squidex)',
    ],
    tags: ['React', 'Vue', 'TypeScript', 'PHP', 'Docker', 'Linux', 'Git', 'Drupal', 'WordPress', 'Strapi', 'Squidex'],
  },
  {
    id: 'global-hitss',
    role: 'Desarrollador Web / Diseñador UX',
    company: 'Global Hitss',
    date: 'Oct 2023 – Abr 2024',
    location: 'Guayaquil',
    highlights: [
      'Diseño de mockups y prototipos con Figma y Adobe XD',
      'Desarrollo de bots RPA con Automation Anywhere',
      'Automatización de procesos empresariales',
      'Optimización de flujos internos',
      'Uso de Docker para despliegue de soluciones',
    ],
    tags: ['Figma', 'Adobe XD', 'RPA', 'Automation Anywhere', 'Docker'],
  },
  {
    id: 'santa-priscila',
    role: 'Desarrollador Web',
    company: 'Santa Priscila',
    date: 'Mayo 2023 – Sep 2023',
    location: 'Guayaquil',
    highlights: [
      'Desarrollo de módulos ERP con Vue.js y Laravel',
      'Integración frontend-backend mediante APIs',
      'Uso de Git para control de versiones',
    ],
    tags: ['Vue.js', 'Laravel', 'APIs', 'Git'],
  },
]

function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-16 px-4 scroll-mt-20">
      <div className="space-y-4">
        <h2 className="heading-2 font-bold text-white">
          {t('experience-title')}
        </h2>
        <div className="h-1.5 w-24 bg-primary rounded-full" />
      </div>

      <div className="relative mt-12">
        {/* <div className="absolute left-[104px] top-0 bottom-0 w-px bg-white/5 hidden lg:block" /> */}

        {experiences.map((exp) => (
          <div key={exp.id} className="relative pb-16 last:pb-0">
            <div className="lg:grid lg:grid-cols-[150px_1fr] lg:gap-8">
              <div className="flex gap-3 lg:flex-col mb-4 lg:mb-0 lg:pt-2">
                {/* <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-bg-site z-10 relative hidden lg:block" /> */}
                <span className="text-xs uppercase tracking-widest text-text-muted/40">
                  {exp.date}
                </span>
              </div>

              <div>
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  location={exp.location}
                  highlights={exp.highlights}
                  tags={exp.tags}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
