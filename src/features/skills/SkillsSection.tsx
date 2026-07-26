import LazyImg from "@/shared/components/common/LazyImage";
import { technologies } from "./skills.data";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex flex-col pt-14"
    >
      <h2 id="skills-heading" className="subtitle-p-1">Skills</h2>
      <p className="text-p-1 mb-4">The tools and technologies I reach for the most.</p>

      <div className="grid grid-cols-4 max-[500px]:grid-cols-3 gap-x-2 gap-y-3">
        {technologies.map((item) => (
          <div
            key={`tech-icon-${item.name}`}
            className="flex flex-col px-1 group relative self-start items-center"
          >
            <LazyImg
              src={item.icon}
              alt={item.name}
              className="grayscale opacity-50 object-contain w-full h-full max-w-17 max-h-17 transition ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
            <p className="text-center opacity-0 group-hover:opacity-95 leading-relaxed transition ease-in-out font-semibold text-sm text-light-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
