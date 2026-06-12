import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 px-4 scroll-mt-20">
      Texto de prueba Experience
    </section>
  );
};

export default Experience;
