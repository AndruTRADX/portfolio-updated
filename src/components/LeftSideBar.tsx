import HoverDiv from "../common/HoverDiv";
import LiHover from "../common/LiHover";
import Icons from "../common/Icons";
import { Media } from "../constants/media";

const LeftSideBar = () => {
  return (
    <aside className="h-full pt-24 pb-24 max-xmd:pb-0 px-14 max-xmd:px-2 flex-col flex justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-light-1 font-extrabold text-6xl max-sm:text-4xl opacity-80">
          AndruTRADX
        </h2>
        <p className="secondary-t-gradient font-bold text-xl underline decoration-primary">
          Fullstack Developer
        </p>
        <p className="text-p-1">
          Focusing in creating efficient and scalable solutions, delivering an
          exceptional user experience.
        </p>

        <ul className="text-p-1 flex flex-col gap-1 mt-8">
          <LiHover content="About">
            <HoverDiv />
          </LiHover>

          {/* <LiHover content="Experience">
            <HoverDiv />
          </LiHover> */}

          <LiHover content="Projects">
            <HoverDiv />
          </LiHover>

          <LiHover content="Skills">
            <HoverDiv />
          </LiHover>

          <LiHover content="Contact">
            <HoverDiv />
          </LiHover>
        </ul>
      </div>

      <div className="mt-12 flex gap-4">
        {Media.map((item) => (
          <Icons media={item} key={`icon-list-${item.name}`} />
        ))}
      </div>
    </aside>
  );
};

export default LeftSideBar;
