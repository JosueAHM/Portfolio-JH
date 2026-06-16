import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'

const projectsData = {
  design: [
    { title: 'Corporación Quirola', image: '/corporación-Quirola-cap.webp', url: 'https://corporacionquirola.com/' },
    { title: 'Concepto Medianet', image: '/medianet-cap.webp', url: 'https://www.figma.com/proto/zILlkM6XMgrsvwtrMi8OBx/MEDIANET?node-id=4-715&page-id=0%3A1&starting-point-node-id=105%3A1316&scaling=scale-down&content-scaling=fixed&t=0ZpVnHIMtC0hDU3A-1' },
    { title: 'Concepto Rediseño UNEA', image: '/concepto-unea-cap.webp', url: 'https://www.figma.com/proto/sgGCkWkpa9FzEA0OPiU6cZ/Mockup-Universidad-del-Atlantico?node-id=87-1028&page-id=0%3A1&t=D0InsOxLorVDBxAC-1' },
  ],
  development: [
    { title: 'Corporación Quirola', image: '/corporación-Quirola-cap.webp', url: 'https://corporacionquirola.com/' },
    { title: 'Deporvito', image: '/deporvito-cap.webp', url: 'https://deporvito.com/' },
    { title: 'Photofuniber', image: '/photofuniber-cap.webp', url: 'https://votes.photofuniber.com/' },
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
