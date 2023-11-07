import Github from "../../assets/svg/social/github.svg";
import LazyImg from "../../common/LazyImage";
import { ProjectDataType } from "../../constants/projects";

const ProjectCard = ({ projectData }: { projectData: ProjectDataType }) => {
  return (
    <a
      href={projectData.project}
      target="_blank"
      className="p-3 grid grid-project-card rounded-lg gap-4 border border-transparent hover:bg-dark-2 hover:border-dark-3 group"
    >
      <img
        className="object-cover w-[8rem] h-[5rem] rounded-md border-2 border-dark-1 shadow-xl shadow-black/75"
        src={projectData.image}
        alt={projectData.name}
      />

      <div className="flex flex-col gap-3">
        <p
          className="subtitle-p-2 opacity-80 transition-opacity after:content-['→'] after:ml-2 group-hover:opacity-100"
        >
          {projectData.name}
        </p>
        <p className="text-p-2">{projectData.description}</p>
        {/* Reemplazamos el segundo enlace con un botón o div */}
        <button
          onClick={() => window.open(projectData.github, '_blank')}
          className="flex gap-2 items-center text-light-1 font-semibold after:content-['→'] opacity-80 transition-opacity hover:opacity-100 cursor-pointer"
        >
          <LazyImg
            src={Github}
            alt={`github-${projectData.name}-link`}
            className="h-6 w-6 object-cover"
          />{" "}
          GitHub
        </button>
      </div>
    </a>
  );
};

export default ProjectCard;
