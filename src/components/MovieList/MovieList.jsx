import { Link } from "react-router-dom";

export default function MovieList({ Movies }) {
  return (
    <ul>
      {Movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
