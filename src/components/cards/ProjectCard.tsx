import Github from "../../assets/svg/social/github.svg";
import LazyImg from "../../common/LazyImage";
import { ProjectDataType } from "../../constants/projects";

const ProjectCard = ({ projectData }: { projectData: ProjectDataType }) => {
  return (
    <a
      href={projectData.project}
      target="_blank"
      className="p-3 grid grid-project-card rounded-lg gap-4 border border-transparent hover:bg-dark-2 hover:border-dark-3 duration-150 group"
    >
      <div className="flex relative h-min max-[500px]:hidden">
        <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full max-w-[8rem] rounded-sm blinking-color scale-[1.07]" />
        <img
          className="object-cover w-[8rem] h-[5rem] shadow-lg border-2 border-dark-1 z-10 shadow-dark-0 group-hover:shadow-none"
          src={projectData.image}
          alt={projectData.name}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="subtitle-p-2 opacity-80 transition-opacity after:ml-2 group-hover:opacity-100">
          {projectData.name}
        </p>
        <p className="text-p-2">{projectData.description}</p>
        {/* Reemplazamos el segundo enlace con un botón o div */}
        <button
          onClick={() => window.open(projectData.github, "_blank")}
          className="flex gap-2 items-center text-light-1 font-semibold after:content-['→'] opacity-50 transition-opacity hover:opacity-100 cursor-pointer duration-200"
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
