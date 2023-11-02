import Home from "./app/Home";

function App() {
  return (
    <>
      <div className="bg-dark-1 flex flex-col">
        <Home />

        <div className="px-8 relative flex items-center max-w-[1100px] mx-auto">
          <div className="h-full text-left max-w-full">
            <div className="grid grid-cols-2 gap-2 h-full w-full">
              <nav className="flex col-span-1 max-[800px]:col-span-2 top-0 h-screen max-[800px]:h-auto min-[800px]:sticky  gap-3 bg-white">
                <div className="h-full py-24 px-14 max-[800px]:px-2 flex-col  flex">
                  1
                </div>
              </nav>

              <article className="col-span-1 max-[800px]:col-span-2 flex flex-col bg-red-500">
                <aside className="pt-24 max-[800px]:pt-0">1</aside>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
