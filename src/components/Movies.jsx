import { MovieGrid } from './MovieGrid';
import '../styles/movies.scss';

export const Movies = ({ movies, lastElementRef }) => {
  return (
    <div data-testid="movies">
      {movies.length > 0 && <MovieGrid movies={movies} lastElementRef={lastElementRef} />}

      {movies.length === 0 && (
        <div className="text-center">
          <p>There were no results for your search.</p>
        </div>
      )}
    </div>
  );
};
