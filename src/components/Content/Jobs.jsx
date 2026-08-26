import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import useInView from "@/hooks/useInView";

const projectsData = {
  design: [
    {
      title: "Corporación Quirola",
      image: "/corporacion-Quirola-cap.webp",
      url: "https://www.figma.com/proto/AvPnyiLu8PLxryE44vXMIK/Corporaci%C3%B3n-Quirola?node-id=207-17&starting-point-node-id=207%3A17&t=5WpU9kU3RVqRG2YF-1",
    },
    {
      title: "Concepto Migo",
      image: "/concepto-migo-cap.webp",
      url: "https://www.figma.com/proto/fRgY6OhE62HwRH00aUeeA6/Prueba-Devsu---Concepto-Haru%5C?node-id=4-337&starting-point-node-id=14%3A1830&t=Sl37Q9aU3cmcKLLS-1",
    },
    {
      title: "Concepto Medianet",
      image: "/medianet-cap.webp",
      url: "https://www.figma.com/proto/zILlkM6XMgrsvwtrMi8OBx/MEDIANET?node-id=4-715&page-id=0%3A1&starting-point-node-id=105%3A1316&scaling=scale-down&content-scaling=fixed&t=0ZpVnHIMtC0hDU3A-1",
    },
    {
      title: "Concepto Rediseño UNEA",
      image: "/concepto-unea-cap.webp",
      url: "https://www.figma.com/proto/sgGCkWkpa9FzEA0OPiU6cZ/Mockup-Universidad-del-Atlantico?node-id=87-1028&page-id=0%3A1&t=D0InsOxLorVDBxAC-1",
    },
  ],
  development: [
    {
      title: "Corporación Quirola",
      image: "/corporacion-Quirola-cap.webp",
      url: "https://www.figma.com/proto/AvPnyiLu8PLxryE44vXMIK/Corporaci%C3%B3n-Quirola?node-id=207-17&starting-point-node-id=207%3A17&t=5WpU9kU3RVqRG2YF-1",
    },
    {
      title: "Deporvito",
      image: "/deporvito-cap.webp",
      url: "https://deporvito.com/",
    },
    {
      title: "Photofuniber",
      image: "/photofuniber-cap.webp",
      url: "https://votes.photofuniber.com/",
    },
    {
      title: "Uneatlantico",
      image: "/uneatlantico-cap.webp",
      url: "https://www.uneatlantico.es/",
    },
  ],
};

function Jobs() {
  const { t } = useTranslation();
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-10 md:py-16 scroll-mt-20"
    >
      <div
        className={`space-y-4 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="heading-2 font-bold text-white">
          {t("projects.title")}
        </h2>
        <div className="h-1.5 w-24 bg-primary rounded-full" />
      </div>

      <div className="space-y-16 mt-6">
        <div
          className={`transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h3 className="heading-4 font-heading text-white mb-6">
            {t("projects.design")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.design.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="heading-4 font-heading text-white mb-6">
            {t("projects.development")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.development.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
