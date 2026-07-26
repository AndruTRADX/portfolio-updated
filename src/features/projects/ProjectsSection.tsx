import ProjectCard from "./components/ProjectCard";
import { ProjectsData } from "./projects.data";

const ProjectsSection = () => {
  return (
    <aside id="projects" className="flex-col flex pt-14 justify-between gap-4">
      <h2 className="subtitle-p-1">Projects</h2>

      <div className="flex flex-col gap-6">
        {ProjectsData.map((item) => (
          <ProjectCard projectData={item} key={`project-card-${item.name}`} />
        ))}
      </div>
    </aside>
  );
};

export default ProjectsSection;
