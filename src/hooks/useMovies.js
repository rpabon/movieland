import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from '@/constants';
import movieSlice, { fetchMovies } from '../data/moviesSlice';

export const useMovies = () => {
  const dispatch = useDispatch();
  const { movies, currentPage, fetchStatus, error } = useSelector((state) => state.movies);
  const { clearMovies, incrementPage } = movieSlice.actions;

  const searchMovies = useCallback((query, page) => {
    const url = new URL(ENDPOINT_SEARCH);
    url.searchParams.set('query', query);
    const apiUrl = url.toString();

    return dispatch(fetchMovies({ apiUrl, page }));
  }, []);

  const discoverMovies = useCallback((page) => {
    return dispatch(fetchMovies({ apiUrl: ENDPOINT_DISCOVER, page }));
  }, []);

  const clearMoviesAction = useCallback(() => {
    dispatch(clearMovies());
  }, []);

  const incrementPageAction = useCallback(() => {
    dispatch(incrementPage());
  }, []);

  return {
    movies,
    currentPage,
    loading: fetchStatus === 'loading',
    error,
    searchMovies,
    discoverMovies,
    clearMovies: clearMoviesAction,
    incrementPage: incrementPageAction,
  };
};
