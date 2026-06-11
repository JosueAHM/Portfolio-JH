import { useTranslation } from 'react-i18next';

/**
 * Presentation component - The hero section of the portfolio.
 * Displays a welcome message, role, and a brief description.
 */
const Presentation = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="flex flex-col items-start justify-center min-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-4xl space-y-8">
        <div   className="space-y-4">
          {/* <p className="text-primary font-semibold tracking-wider uppercase text-sm md:text-base mb-2">
            {t('nav.home')}
          </p> */}
          <h1 className="heading-1 font-bold tracking-tight text-white leading-tight">
            {t('presentation')}
          </h1>
          <div className="h-1.5 w-24 bg-primary rounded-full" />
        </div>

        <h2 className="heading-3 text-text-muted font-medium italic">
          {t('subtitle-presentation')}
        </h2>

        <p className="text-base md:text-xl leading-relaxed max-w-2xl font-light">
          {t('presentation-description')}
        </p>

        <div className='flex flex-wrap items-center gap-6 pt-8'>
          <a
            href="#projects"
            className="button--outline"
          >
            <span className="relative z-10">{t('see-resume')}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
        {/* <footer className="flex flex-wrap items-center gap-6 pt-8">

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8 fill-current">
                <use href="/icons.svg#github-icon" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8 fill-current">
                <use href="/icons.svg#linkedin-icon" />
              </svg>
            </a>
          </div>
        </footer> */}
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -z-10 top-1/4 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-1/4 -left-10 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
    </section>
  );
};

export default Presentation;
