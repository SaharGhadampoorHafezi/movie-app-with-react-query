"use client";

import { useQuery } from "react-query";

export const useTopRated = () => {
  const topRated = useQuery(["topRated"], () =>
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4fafd3fe86e633d4fa8bda9862317cb1"
    ).then((res) => res.json())
  );
  return topRated;
};
