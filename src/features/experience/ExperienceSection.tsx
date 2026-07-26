import ExperienceCard from "./components/ExperienceCard";
import { ExperienceData } from "./experience.data";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex-col flex pt-14 justify-between gap-4"
    >
      <h2 id="experience-heading" className="subtitle-p-1">
        Experience
      </h2>
      <p className="text-p-1">Where I've worked and what I've been building.</p>

      <div className="flex flex-col">
        {ExperienceData.map((item, index) => (
          <ExperienceCard
            experience={item}
            isLast={index === ExperienceData.length - 1}
            key={`experience-card-${item.company}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
