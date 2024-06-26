import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import searchMoviesById from "../../functions/searchMoviesById";

import NotFoundPage from "../NotFoundPage/NotFoundPage";

import InfoAbout from "../../components/InfoAbout/InfoAbout";
import AdditionalLinks from "../../components/AdditionalLinks/AdditionalLinks";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIdMovies = async () => {
      try {
        setLoading(true);
        const response = await searchMoviesById(movieId);
        setMovie(response);
      } catch (error) {
        console.log("ops");
      } finally {
        setLoading(false);
      }
    };
    fetchIdMovies();
  }, []);
  if (movie) {
    return (
      <>
        <InfoAbout film={movie.data} />
        <AdditionalLinks />
        <Outlet />
      </>
    );
  } else {
    return !loading && <NotFoundPage />;
  }
}
