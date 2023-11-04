import { MediaType } from "../constants/media";

const Icons = ({ media }: { media: MediaType }) => {
  return (
    <a href={media.link} target="_blank">
      <img
        src={media.icon}
        alt={media.name}
        className="w-[1.7rem] h-[1.7rem] opacity-70 transition hover:opacity-100 hover:scale-110"
      />
    </a>
  );
};

export default Icons;
