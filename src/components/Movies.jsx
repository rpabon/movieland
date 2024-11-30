import { MovieGrid } from './MovieGrid';
import { usePaginatedMovies } from '../hooks/usePaginatedMovies';
import '../styles/movies.scss';

export const Movies = () => {
  const { movies, loading, lastMovieRef } = usePaginatedMovies();
  const showMovies = movies.length > 0;
  const noResults = movies.length === 0 && !loading;

  return (
    <div data-testid="movies">
      {loading && <p className="text-center">Loading...</p>}

      {showMovies && <MovieGrid movies={movies} lastMovieRef={lastMovieRef} />}

      {noResults && (
        <div className="text-center">
          <p>There were no results for your search.</p>
        </div>
      )}
    </div>
  );
};
