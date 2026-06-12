import { useTranslation } from 'react-i18next';

const Jobs = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 px-4 scroll-mt-20">
      Texto de prueba Jobs
    </section>
  );
};

export default Jobs;
