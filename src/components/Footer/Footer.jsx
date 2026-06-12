import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-text-muted text-center py-6 px-4 mt-8">
      <p>
        &copy; {year} {t('profile.name')}. {t('footer.rights')}
      </p>
      <p className="text-sm text-text-muted/60 mt-1">
        {t('footer.built')}
      </p>
    </footer>
  )
}

export default Footer
