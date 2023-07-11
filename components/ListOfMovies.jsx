import React from "react";
import { useUpcomings } from "../utiles/useUpcomings";
import { useTopRated } from "../utiles/Toprated";
import { usePopular } from "../utiles/PopularMovies";
import { useNowPlaying } from "../utiles/NowPlaying";
import Carousel from "react-material-ui-carousel";
import ListItems from "./ListItems";

export default function ListOfMovies() {
  const upComings = useUpcomings();
  const topRated = useTopRated();
  const popular = usePopular();
  const nowPlaying = useNowPlaying();

  console.log('upComing is:', upComings);
  console.log('topRated is:', topRated);
  console.log('popular is:', popular);
  console.log('nowPlaying is:', nowPlaying);

  return (
    <>
      <Carousel>
        {upComings.isSuccess
          ? upComings.data.results.map((result) => (
              <ListItems
                overview={result.overview}
                key={result.key}
                title={result.title}
                image={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
              />
            ))
          : null}
      </Carousel>
      <Carousel>
        {topRated.isSuccess
          ? topRated.data.results.map((result) => (
              <ListItems
                overview={result.overview}
                key={result.key}
                title={result.title}
                image={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
              />
            ))
          : null}
      </Carousel>
      <Carousel>
        {popular.isSuccess
          ? popular.data.results.map((result) => (
              <ListItems
                overview={result.overview}
                key={result.key}
                title={result.title}
                image={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
              />
            ))
          : null}
      </Carousel>
      <Carousel>
        {nowPlaying.isSuccess
          ? nowPlaying.data.results.map((result) => (
              <ListItems
                overview={result.overview}
                key={result.key}
                title={result.title}
                image={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
              />
            ))
          : null}
      </Carousel>
    </>
  );
}
