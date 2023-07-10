import React from "react";
import { useFetchMovie } from "../utiles/MovieFetch";
import Carousel from "react-material-ui-carousel";
import CarouselItems from "./CarouselItems";

export default function MyCarousel() {
  const movies = useFetchMovie();
  console.log(movies);
  const selected = movies.results.slice(0, 5);
  console.log(selected);

  return (
    <Carousel>
      {selected.map((selected) =>
        selected.map((select) => (
          <CarouselItems
            title={select.title}
            image={`https://image.tmdb.org/t/p/w300/${select.poster_path}`}
            overview={select.overview}
            key={select.id}
          />
        ))
      )}
    </Carousel>
  );
}
