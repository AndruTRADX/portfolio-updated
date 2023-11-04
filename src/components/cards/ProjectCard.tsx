import Github from "../../assets/svg/social/github.svg";
import { ProjectDataType } from "../../constants/projects";

const ProjectCard = ({ projectData }: { projectData: ProjectDataType }) => {
  return (
    <a
      href={projectData.project}
      target="_blank"
      className="p-3 grid grid-project-card rounded-lg gap-4 border border-transparent hover:bg-dark-2 hover:border-dark-3"
    >
      <img
        className="object-cover w-[8rem] h-[5rem] rounded-md border-2 border-dark-1 shadow-xl shadow-black/75"
        src={projectData.image}
      />

      <div className="flex flex-col gap-3">
        <a
          target="_blank"
          href={projectData.project}
          className="subtitle-p-2 opacity-80 transition-opacity hover:opacity-100 after:content-['→'] after:ml-2"
        >
          {projectData.name}
        </a>
        <p className="text-p-2">{projectData.description}</p>
        <a
          href={projectData.github}
          target="_blank"
          className="flex gap-2 items-center text-light-1 font-semibold after:content-['→'] opacity-80 transition-opacity hover:opacity-100"
        >
          <img
            src={Github}
            alt={`github-${projectData.name}-link`}
            className="h-6 w-6 object-cover"
          />{" "}
          GitHub
        </a>
      </div>
    </a>
  );
};

export default ProjectCard;
