import { useMemo } from "react";
import HoverDiv from "./HoverDiv";
import LiHover from "./LiHover";
import SocialIcons from "./SocialIcons";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { Media } from "@/shared/constants/media.data";

type LeftSideBarProps = {
  showPlaylists?: boolean;
};

const LeftSideBar = ({ showPlaylists = true }: LeftSideBarProps) => {
  const sectionIds = useMemo(
    () =>
      ["about", "experience", "projects", "skills", showPlaylists ? "playlists" : null, "contact"].filter(
        (id): id is string => id !== null
      ),
    [showPlaylists]
  );

  const activeId = useActiveSection(sectionIds);

  return (
    <aside className="h-full pt-24 pb-24 max-xmd:pb-0 px-14 max-xmd:px-2 flex-col flex justify-between">
      <div className="flex flex-col gap-3">
        <p className="text-light-1/70 font-extrabold text-5xl max-sm:text-4xl">
          AndruTRADX
        </p>
        <p className="text-light-1/70 font-semibold text-xl">
          Fullstack Developer
        </p>
        <p className="text-p-1">
          Focusing in creating efficient, scalable and stable solutions, delivering an
          exceptional user experience.
        </p>

        <ul className="text-base font-medium text-light-1/50 leading-6 flex flex-col gap-1 mt-8">
          <LiHover content="About" active={activeId === "about"}>
            <HoverDiv />
          </LiHover>

          <LiHover content="Experience" active={activeId === "experience"}>
            <HoverDiv />
          </LiHover>

          <LiHover content="Projects" active={activeId === "projects"}>
            <HoverDiv />
          </LiHover>

          <LiHover content="Skills" active={activeId === "skills"}>
            <HoverDiv />
          </LiHover>

          {showPlaylists && (
            <LiHover content="Playlists" active={activeId === "playlists"}>
              <HoverDiv />
            </LiHover>
          )}

          <LiHover content="Contact" active={activeId === "contact"}>
            <HoverDiv />
          </LiHover>
        </ul>
      </div>

      <div className="mt-12 flex gap-4 relative">
        <div className="sidebar-gradient hidden md:flex" />
        <div className="sidebar-gradient-md flex md:hidden" />

        {Media.map((item) => (
          <SocialIcons media={item} key={`icon-list-${item.name}`} />
        ))}
      </div>
    </aside>
  );
};

export default LeftSideBar;
