import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

function Header() {
  const { t } = useTranslation()

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
  }

  return (
    <div className="sticky top-0 z-20 flex items-center justify-end gap-2 bg-primary px-6 py-3 mb-8">
      <a
        href="#contact"
        className="text-text-dark font-semibold hover:opacity-80 transition-opacity"
      >
        {t('contact-me')}
      </a>

      <button
        onClick={toggleLanguage}
        className="text-text-dark font-semibold hover:opacity-80 transition-opacity uppercase cursor-pointer"
      >
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  )
}

export default Header
