import Github from "@/assets/svg/social/github.svg";
import LazyImg from "@/shared/components/common/LazyImage";
import { ProjectDataType } from "../projects.types";

const ProjectCard = ({ projectData }: { projectData: ProjectDataType }) => {
  return (
    <div className="relative group overflow-hidden rounded">
      <a
        href={projectData.project}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={projectData.name}
        className="absolute inset-0"
      />

      <div className="absolute opacity-0 inset-0 group-hover:opacity-100 rounded-md blinking-color transition duration-200 pointer-events-none" />

      <div className="absolute inset-0.75 rounded overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-xs"
          style={{ backgroundImage: `url(${projectData.image})` }}
        />
      </div>

      <div className="absolute inset-0.75 rounded bg-dark-0/75 group-hover:bg-dark-0/30 transition-colors duration-300 pointer-events-none" />

      <div className="p-3 rounded gap-4 border-2 border-transparent group-hover:border-dark-0 z-10 relative m-0.75 transition duration-200 pointer-events-none">
        <div className="flex flex-col gap-3">
          <p className="subtitle-p-2 opacity-80 after:ml-2 group-hover:opacity-100 after:content-['→']">
            {projectData.name}
          </p>
          <p className="text-p-2">{projectData.description}</p>
          <div>
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-light-1 font-semibold after:content-['→'] opacity-50 hover:opacity-100 cursor-pointer duration-200 relative w-fit pointer-events-auto"
            >
              <LazyImg
                src={Github}
                alt={`${projectData.name} GitHub repository`}
                className="h-6 w-6 object-cover"
              />{" "}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
