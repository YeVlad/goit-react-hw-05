export default function Home({ trendingMovies, error }) {
  return (
    <>
      <h1>Trending Today</h1>
      {error && <p>ERROR</p>}
      <ul>
        {trendingMovies.map((movie) => {
          return <li key={movie.id}>{movie.original_title}</li>;
        })}
      </ul>
    </>
  );
}
