import { Link } from 'react-router-dom';
import { MovieGrid } from '@/components/MovieGrid';
import { useStarredMovies } from '@/hooks/useStarredMovies';
import '@/styles/starred.scss';

export const Starred = () => {
  const { starredMovies, clearStarredMovies } = useStarredMovies();

  return (
    <div className="starred" data-testid="starred">
      {starredMovies.length > 0 && (
        <div data-testid="starred-movies" className="starred-movies">
          <h6 className="header">Starred movies</h6>
          <MovieGrid movies={starredMovies} />
          <footer className="text-center">
            <button className="btn btn-primary" onClick={clearStarredMovies}>
              Remove all starred
            </button>
          </footer>
        </div>
      )}

      {starredMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-star" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};
