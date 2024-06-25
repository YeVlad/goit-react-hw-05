import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import searchMoviesById from "../../functions/searchMoviesById";

import InfoAbout from "../../components/InfoAbout/InfoAbout";
import AdditionalLinks from "../../components/AdditionalLinks/AdditionalLinks";

export default function InfoAboutMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    const fetchIdMovies = async () => {
      try {
        const response = await searchMoviesById(movieId);

        setMovie(response);
      } catch (error) {
        console.log("ops");
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
  }
}
