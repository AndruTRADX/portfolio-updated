import AboutSection from "@/features/about/AboutSection";
import ContactSection from "@/features/contact/ContactSection";
import ExperienceSection from "@/features/experience/ExperienceSection";
import HomeSection from "@/features/home/HomeSection";
import PlaylistsSection from "@/features/playlists/PlaylistsSection";
import { usePlaylists } from "@/features/playlists/hooks/usePlaylists";
import ProjectsSection from "@/features/projects/ProjectsSection";
import SkillsSection from "@/features/skills/SkillsSection";
import Footer from "@/shared/components/layout/Footer";
import LeftSideBar from "@/shared/components/layout/LeftSideBar";

function App() {
  const { playlists, status } = usePlaylists();
  const showPlaylists = !(
    status === "error" ||
    (status === "ready" && playlists.length === 0)
  );

  return (
    <>
      <div className="bg-dark-1 flex flex-col relative">
        <HomeSection />

        <main className="px-8 relative flex items-center max-w-250 mx-auto">
          <div className="grid grid-cols-2 gap-2 h-full w-full">
            <nav className="flex col-span-1 max-xmd:col-span-2 top-0 h-screen max-xmd:h-auto min-xmd:sticky gap-3">
              <LeftSideBar showPlaylists={showPlaylists} />
            </nav>

            <article className="col-span-1 max-xmd:col-span-2 flex flex-col pb-24 max-xmd:px-2">
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <PlaylistsSection playlists={playlists} status={status} />
              <ContactSection />
              <Footer />
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
