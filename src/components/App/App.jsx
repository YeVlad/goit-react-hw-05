import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import InfoAboutMovie from "../../pages/InfoAboutMovie/InfoAboutMovie";
import Cast from "../Cast/Cast";
import Review from "../Review/Review";

import searchTrendingMovie from "../../functions/searchTrendingMovie";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);

        const response = await searchTrendingMovie();
        setTrendingMovies(response.data.results);
      } catch (error) {
        setError(true);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home trendingMovies={trendingMovies} error={error} />}
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<InfoAboutMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Problem</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
