import HoverDiv from "../common/HoverDiv";
import LiHover from "../common/LiHover";

const LeftSideBar = () => {
  return (
    <aside className="h-full py-24 px-14 xmd:px-2 flex-col flex justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="primary-t-gradient font-extrabold text-6xl">
          AndruTRADX
        </h2>
        <p className="secondary-t-gradient font-bold text-xl underline decoration-primary">
          Fullstack Developer
        </p>
        <p className="text-lg font-semibold text-light-2">
          Focusing in creating efficient and scalable solutions, delivering an
          exceptional user experience.
        </p>

        <ul className="text-light-2 font-semibold flex flex-col gap-2 mt-8">
          <LiHover content="About">
            <HoverDiv />
          </LiHover>

          <LiHover content="Experience">
            <HoverDiv />
          </LiHover>

          <LiHover content="Projects">
            <HoverDiv />
          </LiHover>
          <LiHover content="Skills">
            <HoverDiv />
          </LiHover>
        </ul>
      </div>

      <div className="mt-12">s</div>
    </aside>
  );
};

export default LeftSideBar;
