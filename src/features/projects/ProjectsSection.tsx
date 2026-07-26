import ProjectCard from "./components/ProjectCard";
import { ProjectsData } from "./projects.data";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex-col flex pt-14 justify-between gap-4"
    >
      <h2 id="projects-heading" className="subtitle-p-1">Projects</h2>
      <p className="text-p-1">A few things I've built and I'm proud to show off.</p>

      <div className="flex flex-col gap-6">
        {ProjectsData.map((item) => (
          <ProjectCard projectData={item} key={`project-card-${item.name}`} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
