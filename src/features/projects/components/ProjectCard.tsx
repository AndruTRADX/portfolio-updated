import Github from "@/assets/svg/social/github.svg";
import LazyImg from "@/shared/components/common/LazyImage";
import { ProjectDataType } from "../projects.types";

const ProjectCard = ({ projectData }: { projectData: ProjectDataType }) => {
  return (
    <div
      className="relative group hover:cursor-pointer overflow-hidden rounded"
      onClick={(e) => {
        e.stopPropagation();
        window.open(projectData.project, "_blank");
      }}
    >
      <div className="absolute opacity-0 inset-0 group-hover:opacity-100 rounded-md blinking-color transition duration-200" />

      <div className="absolute inset-0.75 rounded overflow-hidden">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-xs"
          style={{ backgroundImage: `url(${projectData.image})` }}
        />
      </div>

      <div className="absolute inset-0.75 rounded bg-dark-0/75 group-hover:bg-dark-0/30 transition-colors duration-300" />

      <div className="p-3 rounded gap-4 border-2 border-transparent group-hover:border-dark-0 z-10 relative m-0.75 transition duration-200">
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
    </div>
  );
};

export default ProjectCard;
