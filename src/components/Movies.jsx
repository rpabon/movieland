import { MovieGrid } from './MovieGrid';
import '../styles/movies.scss';

export const Movies = ({ movies, lastElementRef }) => {
  return (
    <div data-testid="movies">
      <MovieGrid movies={movies} lastElementRef={lastElementRef} />
    </div>
  );
};
