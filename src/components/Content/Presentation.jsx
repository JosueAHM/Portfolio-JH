import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 px-4">
      <div className="flex-1 max-w-2xl space-y-8">
        <div className="space-y-4">
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

        <div className="flex flex-wrap items-center gap-6 pt-8">
          <a
            href="https://drive.google.com/file/d/1TWbb4S6JvNmWMAisk3_u4VTb26WVlBGH/view?usp=sharing"
            className="button button--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('see-resume')}
          </a>
          <a
            href="https://www.linkedin.com/in/josue-holguin-4b5362221"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--outline"
          >
            {t('see-linkedin')}
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1">
        <svg
          viewBox="0 0 280 280"
          className="w-64 h-64 lg:w-80 lg:h-80 text-primary"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="240" height="200" rx="16" stroke="currentColor" strokeWidth="2" />
          <circle cx="44" cy="44" r="6" fill="currentColor" />
          <circle cx="68" cy="44" r="6" fill="currentColor" opacity="0.5" />
          <circle cx="92" cy="44" r="6" fill="currentColor" opacity="0.3" />
          <text x="40" y="80" fontSize="20" fill="currentColor" fontFamily="monospace" opacity="0.9">
            &gt; const dev = {'{'}
          </text>
          <text x="60" y="100" fontSize="18" fill="currentColor" fontFamily="monospace" opacity="0.7">
            name: &quot;Josué&quot;
          </text>
          <text x="60" y="126" fontSize="18" fill="currentColor" fontFamily="monospace" opacity="0.7">
            role: &quot;Full Stack&quot;
          </text>
          <text x="60" y="152" fontSize="18" fill="currentColor" fontFamily="monospace" opacity="0.5">
            passion: &quot;Code &amp; UI&quot;
          </text>
          <text x="40" y="180" fontSize="20" fill="currentColor" fontFamily="monospace" opacity="0.9">
            {'}'}
          </text>
          <text x="60" y="181" fontSize="20" fill="currentColor" fontFamily="monospace" opacity="0.6">
            █
          </text>
        </svg>
      </div>

      <div className="absolute -z-10 top-1/4 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-1/4 -left-10 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
    </section>
  );
};

export default Presentation;
