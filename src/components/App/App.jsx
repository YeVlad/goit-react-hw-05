import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";

import searchTrendingMovie from "../../functions/searchTrendingMovie";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await searchTrendingMovie();
        setTrendingMovies(response.data.results);
        console.log(response.data.results);
        setLoading(false);
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
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
