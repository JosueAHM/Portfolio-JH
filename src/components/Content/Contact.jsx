import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 px-4 scroll-mt-20">
      Texto de prueba Contacto
    </section>
  );
};

export default Contact;
