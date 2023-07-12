'use client';

import { useQuery } from "react-query";

export const useFetchData = (term) => {
  const fetchData = useQuery(["search", term], () =>
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4fafd3fe86e633d4fa8bda9862317cb1&query=${term}`
    ).then((res) => res.json())
  );
  return fetchData;
};
