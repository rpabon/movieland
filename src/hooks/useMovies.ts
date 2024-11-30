import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from '@/constants';
import movieSlice, { fetchMovies, MoviesState } from '@/data/moviesSlice';
import { RootState, AppDispatch } from '@/data/store';

export const useMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, currentPage, fetchStatus } = useSelector<RootState, MoviesState>(
    (state) => state.movies
  );
  const { clearMovies, incrementPage } = movieSlice.actions;

  const searchMovies = useCallback(
    (query: string, page?: number) => {
      const url = new URL(ENDPOINT_SEARCH);
      url.searchParams.set('query', query);
      const apiUrl = url.toString();

      return dispatch(fetchMovies({ apiUrl, page }));
    },
    [dispatch]
  );

  const discoverMovies = useCallback(
    (page?: number) => {
      return dispatch(fetchMovies({ apiUrl: ENDPOINT_DISCOVER, page }));
    },
    [dispatch]
  );

  const clearMoviesAction = useCallback(() => {
    dispatch(clearMovies());
  }, [dispatch, clearMovies]);

  const incrementPageAction = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch, incrementPage]);

  return {
    movies,
    currentPage,
    loading: fetchStatus === 'loading',
    searchMovies,
    discoverMovies,
    clearMovies: clearMoviesAction,
    incrementPage: incrementPageAction,
  };
};
