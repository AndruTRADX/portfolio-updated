import ArrowDown from "../assets/svg/resources/arrow-down.svg";

const DownIcon = () => {
  return (
    <a
      href="#about"
      className="absolute text-white bottom-12 text-bold z-10 flex flex-col group moving-arrow_container"
      style={{ animationDelay: "0.6s" }}
    >
      <img
        src={ArrowDown}
        alt="Arrow Down"
        className="down-arrow mb-[-8px]"
        style={{ animationDelay: "0.3s" }}
      />
      <img
        src={ArrowDown}
        alt="Arrow Down"
        className="down-arrow mb-[-8px]"
        style={{ animationDelay: "0.6s" }}
      />
      <img
        src={ArrowDown}
        alt="Arrow Down"
        className="down-arrow"
        style={{ animationDelay: "0.9s" }}
      />
    </a>
  );
};

export default DownIcon;
