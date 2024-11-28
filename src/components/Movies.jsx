import { Movie } from "./Movie";
import "../styles/movies.scss";

export const Movies = ({ movies }) => {
  return (
    <div data-testid="movies">
      {movies.movies.results?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
