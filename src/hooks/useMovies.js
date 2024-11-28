import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { fetchMovies } from '@/data/moviesSlice';
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from '@/constants';

export const useMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const searchMovies = (query) => {
    const endpoint = `${ENDPOINT_SEARCH}&query=${encodeURIComponent(query)}`;

    dispatch(fetchMovies(endpoint));
    setSearchParams(createSearchParams({ search: query }));
  };

  const discoverMovies = () => {
    dispatch(fetchMovies(ENDPOINT_DISCOVER));
    setSearchParams();
  };

  const getMovies = useCallback(
    (searchTerm) => {
      const query = searchTerm?.trim();

      if (query) {
        searchMovies(query);
      } else {
        discoverMovies();
      }
    },
    [searchMovies, discoverMovies]
  );

  const getMoviesFromSearchParams = () => {
    const query = searchParams.get('search');
    getMovies(query);
  };

  return {
    movies,
    getMovies,
    getMoviesFromSearchParams,
  };
};
