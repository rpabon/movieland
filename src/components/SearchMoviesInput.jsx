import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const INPUT_DELAY = 500;

export const SearchMoviesInput = ({ getMovies }) => {
  const onHomeClick = () => {
    getMovies();
  };

  const debouncedSearchMovies = useCallback(
    debounce((searchTerm) => {
      getMovies(searchTerm);
    }, INPUT_DELAY),
    [getMovies]
  );

  const searchMovies = (e) => {
    const searchTerm = e.target.value;

    debouncedSearchMovies(searchTerm);
  };

  return (
    <div className="input-group rounded">
      <Link to="/" onClick={onHomeClick} className="search-link">
        <input
          type="search"
          data-testid="search-movies"
          onChange={searchMovies}
          className="form-control rounded"
          placeholder="Search movies..."
          aria-label="Search movies"
          aria-describedby="search-addon"
        />
      </Link>
    </div>
  );
};
