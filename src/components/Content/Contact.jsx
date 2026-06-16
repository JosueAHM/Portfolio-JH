import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";

const mailSubject = encodeURIComponent("Contacto desde portfolio");
const mailBody = encodeURIComponent(`Hola Josué,

Vi tu portfolio y me gustaría conversar contigo sobre un proyecto.

Saludos.`);
const mailHref = `mailto:josue_holguin@outlook.com?subject=${mailSubject}&body=${mailBody}`;

function Contact() {
  const { t } = useTranslation();
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-10 md:py-16 scroll-mt-20"
    >
      <div
        className={`space-y-4 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="heading-2 font-bold text-white">{t("contact-me")}</h2>
        <div className="h-1.5 w-24 bg-primary rounded-full" />
      </div>
      <div
        className={`max-w-4xl mx-auto px-6 mt-12 text-center transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        <h2 className="text-3xl md:text-4xl font-heading text-white leading-tight max-w-2xl mx-auto">
          {t("contact.title")}
        </h2>

        <p className="text-text-muted mt-4 mb-8 max-w-xl mx-auto">
          {t("contact.description")}
        </p>

        <a
          href={mailHref}
          className="inline-flex items-center justify-center gap-2 bg-header-bg border-2 border-primary text-text-dark px-7 py-2.5 rounded-full mx-auto hover:opacity-90 transition"
          aria-label={t("contact.button")}
        >
          <svg className="w-5 h-5" role="presentation" aria-hidden="true">
            <use href="/icons.svg#mail-icon" />
          </svg>
          {t("contact.button")}
        </a>
      </div>
    </section>
  );
}

export default Contact;
