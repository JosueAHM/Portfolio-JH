import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Header({ sidebarOpen, onToggle }) {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
  };

  return (
    <div className="sticky top-0 z-20 flex items-center bg-primary px-6 py-3 mb-8">
      <button
        className="lg:hidden text-text-dark p-1 mr-2 hover:opacity-80 transition-opacity cursor-pointer"
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="flex items-center gap-2 ml-auto">
        <a
          href="#contact"
          className="text-text-dark font-semibold hover:opacity-80 transition-opacity"
        >
          {t("contact-me")}
        </a>

        <button
          onClick={toggleLanguage}
          className="text-text-dark font-semibold hover:opacity-80 transition-opacity uppercase cursor-pointer pl-2 border-l-2 border-text-dark"
        >
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </div>
  );
}

export default Header;
