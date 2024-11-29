import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { fetchMovies } from '@/data/moviesSlice';
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from '@/constants';

export const useMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const searchMovies = (query, page = 1) => {
    const apiUrl = `${ENDPOINT_SEARCH}&query=${encodeURIComponent(query)}`;

    dispatch(fetchMovies({ apiUrl, page }));
    setSearchParams(createSearchParams({ search: query, page: page.toString() }));
    setCurrentPage(page);
  };

  const discoverMovies = (page = 1) => {
    dispatch(fetchMovies({ apiUrl: ENDPOINT_DISCOVER, page }));
    setSearchParams(createSearchParams({ page: page.toString() }));
    setCurrentPage(page);
  };

  const getMovies = useCallback(
    (searchTerm, page = 1) => {
      const query = searchTerm?.trim();

      if (query) {
        searchMovies(query, page);
      } else {
        discoverMovies(page);
      }
    },
    [searchMovies, discoverMovies]
  );

  const getMoviesFromSearchParams = () => {
    const query = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1', 10);
    getMovies(query, page);
  };

  const nextPage = () => {
    getMovies(searchParams.get('search'), currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      getMovies(searchParams.get('search'), currentPage - 1);
    }
  };

  return {
    movies: moviesState.movies,
    getMovies,
    getMoviesFromSearchParams,
    currentPage,
    nextPage,
    previousPage,
  };
};
