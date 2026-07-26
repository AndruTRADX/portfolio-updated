import ExperienceCard from "./components/ExperienceCard";
import { ExperienceData } from "./experience.data";

const ExperienceSection = () => {
  return (
    <aside id="experience" className="flex-col flex pt-14 justify-between gap-4">
      <h2 className="subtitle-p-1">Experience</h2>

      <div className="flex flex-col">
        {ExperienceData.map((item, index) => (
          <ExperienceCard
            experience={item}
            isLast={index === ExperienceData.length - 1}
            key={`experience-card-${item.company}`}
          />
        ))}
      </div>
    </aside>
  );
};

export default ExperienceSection;
