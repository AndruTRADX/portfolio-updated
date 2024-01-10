import Github from "../../assets/svg/social/github.svg";
import LazyImg from "../../common/LazyImage";
import { ProjectDataType } from "../../constants/projects";

const ProjectCard = ({ projectData }: { projectData: ProjectDataType }) => {
  return (
    <div
      className="relative group hover:cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        window.open(projectData.project, "_blank");
      }}
    >
      <div className="p-3 grid grid-project-card rounded gap-4 border-2 border-transparent group-hover:bg-dark-2 group-hover:border-dark-0  z-10 relative m-[3px]">
        <div className="flex h-min max-[500px]:hidden">
          <img
            className="object-cover w-[8rem] h-[5rem] shadow-lg border-2 border-dark-1 z-20 shadow-dark-0"
            src={projectData.image}
            alt={projectData.name}
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="subtitle-p-2 opacity-80 after:ml-2 group-hover:opacity-100 after:content-['→']">
            {projectData.name}
          </p>
          <p className="text-p-2">{projectData.description}</p>
          <div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(projectData.github, "_blank");
              }}
              className="flex gap-2 items-center text-light-1 font-semibold after:content-['→'] opacity-50 hover:opacity-100 cursor-pointer duration-200"
            >
              <LazyImg
                src={Github}
                alt={`github-${projectData.name}-link`}
                className="h-6 w-6 object-cover"
              />{" "}
              GitHub
            </div>
          </div>
        </div>
      </div>

      <div className="absolute opacity-0 top-0 group-hover:opacity-100 w-full h-full rounded-md blinking-color" />
    </div>
  );
};

export default ProjectCard;
