import PlaylistCard from "./components/PlaylistCard";
import { PlaylistsStatus, YoutubePlaylist } from "./playlists.types";

type PlaylistsSectionProps = {
  playlists: YoutubePlaylist[];
  status: PlaylistsStatus;
};

const PlaylistsSection = ({ playlists, status }: PlaylistsSectionProps) => {
  if (status === "error" || (status === "ready" && playlists.length === 0)) {
    return null;
  }

  return (
    <section
      id="playlists"
      aria-labelledby="playlists-heading"
      className="flex flex-col pt-14"
    >
      <h2 id="playlists-heading" className="subtitle-p-1">Playlists</h2>

      <p className="text-p-1 mb-4">Balance is the key to happiness, sit and relax with some music.</p>

      <div className="grid grid-cols-1 gap-3 mt-2">
        {status === "loading"
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`playlist-skeleton-${i}`}
                className="h-20 rounded-xl bg-dark-2 animate-pulse"
              />
            ))
          : playlists.map((playlist) => (
              <PlaylistCard
                playlist={playlist}
                key={`playlist-card-${playlist.id}`}
              />
            ))}
      </div>
    </section>
  );
};

export default PlaylistsSection;
