import PlaylistCard from "./components/PlaylistCard";
import { usePlaylists } from "./hooks/usePlaylists";

const PlaylistsSection = () => {
  const { playlists, status } = usePlaylists();

  if (status === "error" || (status === "ready" && playlists.length === 0)) {
    return null;
  }

  return (
    <aside id="playlists" className="flex flex-col pt-11">
      <h2 className="subtitle-p-1">My Playlists</h2>

      <p className="text-p-1 mb-4">Balance is the key to happiness, sit and relax with some music.</p>

      <div className="grid grid-cols-1 max-[500px]:grid-cols-1 gap-3 mt-2">
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
    </aside>
  );
};

export default PlaylistsSection;
