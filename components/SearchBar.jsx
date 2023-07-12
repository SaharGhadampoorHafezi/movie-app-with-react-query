"use client";

import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useFetchData } from "../utiles/FetchSearchedData";
import ModalByMe from "./ModalByMe";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const fetchData = useFetchData(term);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(fetchData);
  };
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <TextField
          onClick={onClickHandler}
          onChange={(e) => setTerm(e.target.value)}
          type="search"
          id="search"
          label="Search"
          sx={{ width: 850 }}
          value={term}
        />
      </Container>
      {fetchData.isSuccess ? (
        <ModalByMe
          overview={fetchData.data.results?.overview}
          key={fetchData.data.results?.key}
          title={fetchData.data.results?.title}
          image={`https://image.tmdb.org/t/p/w300/${fetchData.data.results?.poster_path}`}
        />
      ) : null}
    </>
  );
}
