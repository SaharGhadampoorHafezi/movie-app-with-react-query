import React from "react";
import { useFetchMovie } from "../utiles/MovieFetch";
import Carousel from "react-material-ui-carousel";
import CarouselItems from "./CarouselItems";
import styled from "styled-components";

export default function MyCarousel() {
  const movies = useFetchMovie();
  console.log(movies);
  const selected = movies.isSuccess ? movies.data.results.slice(0, 5) : null;
  console.log(selected);

  return (
    <Carousel>
      {selected?.map((select) => (
        <CarouselItems
          title={select.title}
          image={`https://image.tmdb.org/t/p/w300/${select.poster_path}`}
          overview={select.overview}
          key={select.id}
        />
      ))}
    </Carousel>
  );
}
