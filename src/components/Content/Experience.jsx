import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import useInView from "@/hooks/useInView";

const experiencesMeta = [
  {
    id: "funiber",
    company: "FUNIBER",
    companyUrl: "https://www.funiber.org",
    date: "Jun 2024 – May 2026",
    location: "Guayaquil",
    tags: [
      "React",
      "Vue",
      "TypeScript",
      "PHP",
      "Docker",
      "Linux",
      "Git",
      "Drupal",
      "WordPress",
      "Strapi",
      "Squidex",
    ],
  },
  {
    id: "global-hitss",
    company: "Global Hitss",
    companyUrl: "https://www.hitss.com/",
    date: "Oct 2023 – Abr 2024",
    location: "Guayaquil",
    tags: ["Figma", "Adobe XD", "RPA", "Automation Anywhere", "Docker"],
  },
  {
    id: "santa-priscila",
    companyUrl: "https://santa-priscila.com/",
    company: "Santa Priscila",
    date: "May 2023 – Sep 2023",
    location: "Guayaquil",
    tags: ["Vue.js", "Laravel", "APIs", "Git"],
  },
];

function Experience() {
  const { t } = useTranslation();
  const [sectionRef, inView] = useInView(0.1);

  const experiences = experiencesMeta.map((exp) => ({
    ...exp,
    role: t(`exp.${exp.id}.role`),
    highlights: t(`exp.${exp.id}.highlights`, { returnObjects: true }),
  }));

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-10 md:py-16 scroll-mt-20"
    >
      <div
        className={`space-y-4 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="heading-2 font-bold text-white">{t("exp.title")}</h2>
        <div className="h-1.5 w-24 bg-primary rounded-full" />
      </div>

      <div className="relative mt-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative pb-16 last:pb-0 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="lg:grid lg:grid-cols-[150px_1fr] lg:gap-8">
              <div className="flex gap-3 lg:flex-col mb-4 lg:mb-0 lg:pt-2">
                {/* <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-bg-site z-10 relative hidden lg:block" /> */}
                <span className="text-xs uppercase tracking-widest text-text-muted/40">
                  {exp.date}
                </span>
              </div>

              <div>
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  companyUrl={exp.companyUrl}
                  location={exp.location}
                  highlights={exp.highlights}
                  tags={exp.tags}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
