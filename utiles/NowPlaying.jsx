"use client";

import { useQuery } from "react-query";

export const useNowPlaying = () => {
  const nowPlaying = useQuery(["nowPlaying"], () =>
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4fafd3fe86e633d4fa8bda9862317cb1"
    ).then(res => res.json())
  );
  return nowPlaying;
};
