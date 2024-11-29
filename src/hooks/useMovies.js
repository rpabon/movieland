import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { fetchMovies, clearMovies } from '@/data/moviesSlice';
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from '@/constants';
import { usePagination } from './usePagination';

export const useMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movies, totalPages } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const { page: pageState, lastElementRef } = usePagination(totalPages);

  const searchMovies = useCallback((query, page) => {
    const url = new URL(ENDPOINT_SEARCH);
    url.searchParams.set('query', query);
    const apiUrl = url.toString();

    setSearchParams(createSearchParams({ search: query }));
    return dispatch(fetchMovies({ apiUrl, page }));
  }, []);

  const discoverMovies = useCallback((page) => {
    setSearchParams({});
    return dispatch(fetchMovies({ apiUrl: ENDPOINT_DISCOVER, page }));
  }, []);

  const getMovies = useCallback(
    (searchTerm = '', page = 1) => {
      const query = searchTerm?.trim();
      if (page === 1) {
        dispatch(clearMovies());
      }

      if (query) {
        return searchMovies(query, page);
      } else {
        return discoverMovies(page);
      }
    },
    [searchMovies, discoverMovies]
  );

  useEffect(() => {
    const query = searchParams.get('search');
    getMovies(query, pageState);
  }, [pageState, searchParams, getMovies]);

  return {
    movies,
    lastMovieRef: lastElementRef,
    getMovies,
  };
};
