import About from "./app/About";
import Contact from "./app/Contact";
import Footer from "./app/Footer";
import Home from "./app/Home";
import Projects from "./app/Projects";
import Skills from "./app/Skills";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <>
      <div className="bg-dark-1 flex flex-col relative">
        <Home />

        <main className="px-8 relative flex items-center max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 gap-2 h-full w-full">
            <nav className="flex col-span-1 max-xmd:col-span-2 top-0 h-screen max-xmd:h-auto min-[800px]:sticky gap-3">
              <LeftSideBar />
            </nav>

            <article className="col-span-1 max-xmd:col-span-2 flex flex-col pb-24 max-xmd:px-2">
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
