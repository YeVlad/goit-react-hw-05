import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

import searchMoviesByName from "../../functions/searchMoviesByName";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [keyWord, setKeyWord] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    async function makeFetch() {
      try {
        const responce = await searchMoviesByName(keyWord);
        setFoundMovies(responce.data.results);
        console.log(responce.data.results);
      } catch (error) {
        console.log(console.log(error));
      }
    }
    makeFetch();
  }, [keyWord]);
  function handleSubmit(values, actions) {
    if (values.searchWord.trim().length > 0) {
      setKeyWord(values.searchWord);
      actions.resetForm();
    }
  }

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {foundMovies.length > 0 && <MovieList Movies={foundMovies} />}
    </>
  );
}

// import SearchBar from "../../components/SearchBar/SearchBar";
// import { useState } from "react";

// import searchMoviesByName from "../../functions/searchMoviesByName";
// import MovieList from "../../components/MovieList/MovieList";

// export default function MoviesPage() {
//   const [foundMovies, setFoundMovies] = useState([]);

//   async function handleSubmit(values, actions) {
//     if (values.searchWord.trim().length > 0) {
//       try {
//         const responce = await searchMoviesByName(values.searchWord);
//         setFoundMovies(responce.data.results);
//         console.log(responce.data.results);
//         actions.resetForm();
//       } catch (error) {
//         console.log(console.log(error));
//       }
//     }
//   }

//   return (
//     <>
//       <SearchBar handleSubmit={handleSubmit} />
//       {foundMovies.length > 0 && <MovieList Movies={foundMovies} />}
//     </>
//   );
// }
