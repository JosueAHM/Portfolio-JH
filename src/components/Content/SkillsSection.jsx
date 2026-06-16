import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";

const categoryKeys = [
  "frontend",
  "backend",
  "design",
  "devops",
  "cms",
  "automation",
];

const categorySkills = {
  frontend: [
    "React",
    "Vue.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "SCSS",
  ],
  backend: ["PHP", "Laravel", "Node.js", "REST APIs", "MVC Architecture"],
  design: [
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Flows",
    "Design Systems",
  ],
  devops: ["Docker", "Linux", "Git", "GitHub", "CI/CD"],
  cms: ["WordPress", "Drupal", "Strapi", "Squidex", "Headless CMS"],
  automation: [
    "RPA",
    "Automation Anywhere",
    "Process Automation",
    "Workflow Integration",
  ],
};

function SkillCard({ category, index, inView }) {
  return (
    <div
      className={`bg-secondary rounded-xl border border-white/5 p-6 transition-all duration-700 ease-out hover:border-primary hover:shadow-lg hover:shadow-primary/5 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      <p className="text-sm text-text-muted/60 mt-1">{category.description}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const { t } = useTranslation();
  const [sectionRef, inView] = useInView(0.1);

  const categories = categoryKeys.map((key) => ({
    title: t(`skills.categories.${key}.title`),
    description: t(`skills.categories.${key}.desc`),
    skills: categorySkills[key],
  }));

  return (
    <section
      id="habilities"
      className="py-10 md:py-16 scroll-mt-20"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-4 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="heading-2 font-bold text-white">
            {t("skills.title")}
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
