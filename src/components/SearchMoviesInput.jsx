import React, { useCallback, useState, useEffect } from 'react';
import { createSearchParams, useSearchParams, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { useMovies } from '../hooks/useMovies';

const INPUT_DELAY = 500;

export const SearchMoviesInput = () => {
  const [searchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const { clearMovies } = useMovies();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParam = searchParams.get('search') || '';
    setInputValue(queryParam);
  }, [searchParams]);

  const debouncedSearchMovies = useCallback(
    debounce((searchTerm) => {
      clearMovies();

      const search = searchTerm.trim() ? `?${createSearchParams({ search: searchTerm })}` : '';
      navigate(`/${search}`, { replace: true });
    }, INPUT_DELAY),
    [navigate, clearMovies]
  );

  const searchMovies = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);
    debouncedSearchMovies(searchTerm);
  };

  return (
    <div className="input-group rounded">
      <div className="search-link">
        <input
          type="search"
          data-testid="search-movies"
          value={inputValue}
          onChange={searchMovies}
          className="form-control rounded"
          placeholder="Search movies..."
          aria-label="Search movies"
          aria-describedby="search-addon"
        />
      </div>
    </div>
  );
};
