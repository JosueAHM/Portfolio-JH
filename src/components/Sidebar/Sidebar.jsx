import profileImg from '../../assets/profile-img.jpg'
import { useTranslation } from 'react-i18next'
import useActiveSection from '../../hooks/useActiveSection'

const socialLinks = [
  { href: 'https://github.com/josueAHM', icon: 'github-icon', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/josue-holguin-4b5362221', icon: 'linkedin-icon', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/josue_hm997', icon: 'instagram-icon', label: 'Instagram' },
  { href: 'mailto:josue_holguin@outlook.com', icon: 'mail-icon', label: 'Email' },
]

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.habilities', href: '#habilities' },
  { key: 'nav.contact-me', href: '#contact' },
]

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

function Sidebar({ isOpen, onClose }) {
  const { t } = useTranslation()
  const activeId = useActiveSection(sectionIds)

  return (
    <aside
      className={`
        fixed left-0 top-0 w-64 h-screen bg-secondary flex flex-col items-center p-8
        z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-text-muted hover:text-primary transition-colors lg:hidden"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center text-4xl font-heading font-bold text-white mb-4 overflow-hidden border-2 border-primary/20 mt-12 lg:mt-0">
        <img src={profileImg} alt={t('profile.name')} className="w-full h-full object-cover" />
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
                onClick={onClose}
                className={`block w-full transition-colors duration-200 text-start px-4 py-2 rounded-md ${
                  activeId === item.href.replace('#', '')
                    ? 'text-primary font-semibold'
                    : 'text-text-muted hover:text-primary hover:bg-white/5'
                }`}
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
            className="text-text-muted hover:text-primary duration-200"
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
