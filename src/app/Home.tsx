import DownIcon from "../common/DownIcon";
import GridBg from "../components/GridBg";

const Home = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <GridBg />

      <article className="relative flex justify-center items-center flex-col mt-40">
        <img
          src="https://i.ibb.co/n3J1p4C/e99bf501d5f7b39f5ff93e65d6eaaaaeb69f1e17.png"
          className="w-80 h-72 object-contain absolute bottom-16 z-10"
        />

        <h1 className="max-xl:text-6xl max-sm:text-5xl font-bold text-light-1 z-20 tracking-[-0.275rem] text-center xl:text-8xl">
          Hi, I'm{" "}
          <span className="font-extrabold primary-t-gradient">AndruTRADX</span>
        </h1>
        <h4 className="text-2xl font-bold z-20 secondary-t-gradient tracking-tight underline decoration-primary">
          Fullstack Developer
        </h4>
      </article>

      <DownIcon />
    </main>
  );
};

export default Home;
