import { useEffect, useState } from "react";
import { getPlaylists } from "../api/youtubeApi";
import { PlaylistsStatus, YoutubePlaylist } from "../playlists.types";

export function usePlaylists() {
  const [playlists, setPlaylists] = useState<YoutubePlaylist[]>([]);
  const [status, setStatus] = useState<PlaylistsStatus>("loading");

  useEffect(() => {
    let cancelled = false;

    getPlaylists()
      .then((data) => {
        if (cancelled) return;
        setPlaylists(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { playlists, status };
}
