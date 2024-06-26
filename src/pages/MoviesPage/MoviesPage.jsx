import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

import searchMoviesByName from "../../functions/searchMoviesByName";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [foundMovies, setFoundMovies] = useState([]);

  async function handleSubmit(values, actions) {
    if (values.searchWord.trim().length > 0) {
      try {
        const responce = await searchMoviesByName(values.searchWord);
        setFoundMovies(responce.data.results);
        console.log(responce.data.results);
        actions.resetForm();
      } catch (error) {
        console.log(console.log(error));
      }
    }
  }

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {foundMovies.length > 0 && <MovieList Movies={foundMovies} />}
    </>
  );
}
