export type YoutubePlaylist = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  itemCount: number;
};

export type PlaylistsStatus = "loading" | "error" | "ready";
