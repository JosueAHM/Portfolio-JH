import { useTranslation } from "react-i18next";

function Header({ sidebarOpen, onToggle, isDark, onToggleTheme }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
  };

  return (
    <div className="sticky top-0 z-20 flex items-center bg-header-bg px-6 py-3 mb-8 shadow-sm">
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
          onClick={onToggleTheme}
          className="text-text-dark hover:opacity-80 transition-opacity cursor-pointer p-1"
          aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

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
