import LazyImg from "../common/LazyImage";
import { technologies } from "../constants/tecnologies";

const Skills = () => {
  return (
    <aside id="skills" className="flex flex-col pt-11">
      <h2 className="subtitle-p-1">Skills</h2>
      <div className="grid grid-cols-4 gap-2 mt-6">
        {technologies.map((item) => (
          <div
            key={`tech-icon-${item.name}`}
            className="flex flex-col px-1 group relative self-start items-center"
          >
            <LazyImg
              src={item.icon}
              alt={item.name}
              className="grayscale opacity-50 object-contain w-full h-full max-w-[4.25rem] max-h-[4.25rem] transition ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
            <p className="text-center opacity-0 group-hover:opacity-95 leading-relaxed transition ease-in-out font-semibold text-light-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Skills;
