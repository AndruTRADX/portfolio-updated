import { useEffect, useState } from "react";
import { getPlaylists } from "../api/youtubeApi";
import { YoutubePlaylist } from "../playlists.types";

type Status = "loading" | "error" | "ready";

export function usePlaylists() {
  const [playlists, setPlaylists] = useState<YoutubePlaylist[]>([]);
  const [status, setStatus] = useState<Status>("loading");

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
