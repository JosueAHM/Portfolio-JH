import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/Sidebar/Sidebar";
import Presentation from "@/components/Content/Presentation";
import Jobs from "@/components/Content/Jobs";
import SkillsSection from "@/components/Content/SkillsSection";
import Experience from "@/components/Content/Experience";
import Contact from "@/components/Content/Contact";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./App.css";

const siteUrl = "https://josueholguin.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josué Holguín",
  jobTitle: "Full Stack Developer & UX/UI Designer",
  url: siteUrl,
  sameAs: [
    "https://github.com/josueAHM",
    "https://www.linkedin.com/in/josue-holguin-4b5362221",
    "https://www.instagram.com/josue_hm997",
  ],
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const { t, i18n } = useTranslation();

  const name = t("profile.name");
  const role = t("profile.role");
  const title = `${name} | ${role}`;
  const description = t("presentation-description");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/favicon.svg`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="flex w-full min-h-screen bg-bg-site">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 lg:ml-64">
          <Header
            sidebarOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            isDark={isDark}
            onToggleTheme={() => setIsDark(!isDark)}
          />
          <div className="main-container content">
            <Presentation />
            <Jobs />
            <Experience />
            <SkillsSection />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
