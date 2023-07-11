"use client";

import { useQuery } from "react-query";

export const usePopular = () => {
  const popular = useQuery(["popular"], () =>
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4fafd3fe86e633d4fa8bda9862317cb1"
    ).then((res) => res.json())
  );
  return popular;
};
