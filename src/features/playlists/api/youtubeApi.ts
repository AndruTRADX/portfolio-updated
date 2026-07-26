import { YoutubePlaylist } from "../playlists.types";

const API_KEY = import.meta.env.VITE_YT_API_KEY;

const DEFAULT_PLAYLIST_IDS = (import.meta.env.VITE_YT_PLAYLIST_IDS ?? "")
  .split(",")
  .map((id: string) => id.trim())
  .filter(Boolean);

type PlaylistsApiResponse = {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium?: { url: string };
        default?: { url: string };
      };
    };
    contentDetails: {
      itemCount: number;
    };
  }>;
};

/**
 * Trae metadata de playlists públicas por su ID.
 * No requiere OAuth: solo funciona para playlists públicas o no listadas.
 */
export async function getPlaylists(
  playlistIds: string[] = DEFAULT_PLAYLIST_IDS
): Promise<YoutubePlaylist[]> {
  if (playlistIds.length === 0) return [];

  const params = new URLSearchParams({
    part: "snippet,contentDetails",
    id: playlistIds.join(","),
    key: API_KEY,
  });

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?${params}`
  );

  if (!res.ok) {
    throw new Error(`YouTube API error: ${res.status}`);
  }

  const data: PlaylistsApiResponse = await res.json();

  return data.items.map((item) => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail:
      item.snippet.thumbnails.medium?.url ??
      item.snippet.thumbnails.default?.url ??
      "",
    itemCount: item.contentDetails.itemCount,
  }));
}
