import DownIcon from "../common/DownIcon";
import GridBg from "../components/GridBg";

const Home = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <GridBg />

      <article className="relative flex justify-center items-center flex-col mt-40">
        <img
          src="https://cdn-mii.accounts.nintendo.com/2.0.0/mii_images/552378392b39e50b/e99bf501d5f7b39f5ff93e65d6eaaaaeb69f1e17.png?type=face&width=512"
          className="w-80 h-72 object-contain absolute bottom-16 z-10"
          alt="Mii icon"
        />

        <h1 className="max-xl:text-6xl max-sm:text-5xl font-bold text-light-1 z-20 tracking-[-0.275rem] text-center xl:text-8xl">
          Hi, I'm{" "}
          <span className="font-extrabold primary-t-gradient">AndruTRADX</span>
        </h1>
        <h2 className="text-2xl font-bold z-20 secondary-t-gradient tracking-tight underline decoration-primary">
          Fullstack Developer
        </h2>
      </article>

      <DownIcon />
    </main>
  );
};

export default Home;
