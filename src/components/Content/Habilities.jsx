import { useTranslation } from 'react-i18next';

const Habilities = () => {
  const { t } = useTranslation();

  return (
    <section id="habilities" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 px-4 scroll-mt-20">
      Texto de prueba Habilities
    </section>
  );
};

export default Habilities;
