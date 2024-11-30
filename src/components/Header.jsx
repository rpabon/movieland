import { Link, NavLink } from 'react-router-dom';
import { SearchMoviesInput } from '@/components/SearchMoviesInput';
import { useMovies } from '../hooks/useMovies';
import { useStarredMovies } from '../hooks/useStarredMovies';
import '../styles/header.scss';

export const Header = () => {
  const { discoverMovies, clearMovies } = useMovies();
  const { starredMovies } = useStarredMovies();

  const onHomeClick = () => {
    clearMovies();
    discoverMovies();
  };

  return (
    <header>
      <Link to="/" data-testid="home" onClick={onHomeClick}>
        <i className="bi bi-film" />
      </Link>

      <nav>
        <NavLink to="/starred" data-testid="nav-starred" className="nav-starred">
          {starredMovies.length > 0 ? (
            <>
              <i className="bi bi-star-fill bi-star-fill-white" />
              <sup className="star-number">{starredMovies.length}</sup>
            </>
          ) : (
            <i className="bi bi-star" />
          )}
        </NavLink>
        <NavLink to="/watch-later" className="nav-fav">
          watch later
        </NavLink>
      </nav>

      <SearchMoviesInput />
    </header>
  );
};
