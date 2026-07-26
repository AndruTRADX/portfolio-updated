import { ExperienceDataType } from "../experience.types";

type ExperienceCardProps = {
  experience: ExperienceDataType;
  isLast: boolean;
};

const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <span className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5 transition-transform duration-300 group-hover:scale-125" />
        {!isLast && <span className="w-0.5 flex-1 bg-dark-3 my-1" />}
      </div>

      <div className={`flex flex-col gap-2 ${isLast ? "" : "pb-8"}`}>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <p className="text-p-1-focus">{experience.role}</p>
          <p className="text-p-2 opacity-70">· {experience.company}</p>
        </div>
        <p className="text-p-2 opacity-50">
          {experience.period} · {experience.location}
        </p>
        <p className="text-p-1">{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
