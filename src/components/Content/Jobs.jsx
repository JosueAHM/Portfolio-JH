import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'

const projectsData = {
  design: [
    { title: 'Corporación Quirola' },
    { title: 'Concepto Medianet' },
    { title: 'Concepto Rediseño UNEA' },
  ],
  development: [
    { title: 'Corporación Quirola' },
    { title: 'Deporvito' },
    { title: 'Photofuniber' },
  ],
}

function Jobs() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-16 px-4 scroll-mt-20">
      
      <div className="space-y-4">
        <h2 className="heading-2 font-bold text-white">
          {t('projects.title')}
        </h2>
        <div className="h-1.5 w-24 bg-primary rounded-full" />
      </div>

      <div className="space-y-16 mt-6">
        <div>
          <h3 className="heading-4 font-heading text-white mb-6">
            {t('projects.design')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.design.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="heading-4 font-heading text-white mb-6">
            {t('projects.development')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.development.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs
