import { useTranslation } from 'react-i18next'

const socialLinks = [
  { href: 'https://github.com/josueAHM', icon: 'github-icon', label: 'GitHub' },
  { href: 'https://linkedin.com/in/josue', icon: 'linkedin-icon', label: 'LinkedIn' },
  { href: 'https://instagram.com/josue', icon: 'instagram-icon', label: 'Instagram' },
]

const navItems = [
  { key: 'nav.home', href: '#inicio' },
  { key: 'nav.projects', href: '#proyectos' },
  { key: 'nav.habilities', href: '#habilidades' },
  { key: 'nav.experience', href: '#experiencia' },
  { key: 'nav.contact', href: '#contacto' },
]

function Sidebar() {
  const { t } = useTranslation()

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-secondary flex flex-col items-center p-8 z-50">
      <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center text-4xl font-heading font-bold text-white mb-4">
        JH
      </div>

      <h3 className="text-heading-5 font-heading text-text-muted text-center">
        {t('profile.name')}
      </h3>
      <p className="text-sm text-text-muted/70 text-center mb-8">
        {t('profile.role')}
      </p>

      <nav className="w-full flex-1">
        <ul className="flex flex-col gap-3">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="block w-full text-text-muted hover:text-primary transition-colors duration-200 text-start px-4 py-2 rounded-md hover:bg-white/5"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-5 mt-auto">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-text-muted hover:text-primary transition-colors duration-200"
          >
            <svg className="w-5 h-5" role="presentation" aria-hidden="true">
              <use href={`/icons.svg#${link.icon}`} />
            </svg>
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
