import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SearchMoviesInput } from '@/components/SearchMoviesInput';
import '../styles/header.scss';

export const Header = ({ getMovies }) => {
  const { starredMovies } = useSelector((state) => state.starred);

  const onHomeClick = () => {
    getMovies();
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

      <SearchMoviesInput getMovies={getMovies} />
    </header>
  );
};
