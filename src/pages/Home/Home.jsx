import { Link } from "react-router-dom";

export default function Home({ trendingMovies, error }) {
  return (
    <>
      <h1>Trending Today</h1>
      {error && <p>ERROR</p>}
      <ul>
        {trendingMovies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
