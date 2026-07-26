import LazyImg from "@/shared/components/common/LazyImage";
import type { YoutubePlaylist } from "../playlists.types";

type PlaylistCardProps = {
  playlist: YoutubePlaylist;
};

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <a
      href={`https://music.youtube.com/playlist?list=${playlist.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 items-center p-2 rounded-xl bg-dark-2 hover:bg-dark-3 transition-colors duration-300 group"
    >
      <div className="relative w-22 h-22 shrink-0 rounded-full bg-dark-0 shadow-lg ring-1 ring-dark-3 group-hover:animate-[spin_4s_linear_infinite] bg-[repeating-radial-gradient(circle_at_center,transparent_0px,transparent_3px,rgba(255,255,255,0.05)_4px)]">
        <LazyImg
          src={playlist.thumbnail}
          alt={playlist.title}
          className="absolute inset-0 m-auto w-14 h-14 rounded-full object-cover ring-2 ring-dark-0"
        />
        <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-dark-0 ring-1 ring-light-2/30" />
      </div>

      <div className="flex flex-col overflow-hidden">
        <p className="text-p-1-focus truncate group-hover:text-primary transition-colors duration-300">
          {playlist.title}
        </p>
        <p className="text-p-2">{playlist.description}</p>
        <p className="text-p-2">{playlist.itemCount} songs</p>
      </div>
    </a>
  );
};

export default PlaylistCard;
