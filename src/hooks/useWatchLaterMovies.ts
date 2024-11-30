import { useDispatch, useSelector } from 'react-redux';
import watchLaterSlice, { WatchLaterState } from '@/data/watchLaterSlice';
import { RootState, AppDispatch } from '@/data/store';
import { MovieType } from '@/types/MovieType';

export const useWatchLaterMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const watchLaterMovies = useSelector<RootState, WatchLaterState['watchLaterMovies']>(
    (state) => state.watchLater.watchLaterMovies
  );
  const { addToWatchLater, removeFromWatchLater, removeAllWatchLater } = watchLaterSlice.actions;

  const isWatchLater = (movieId: number): boolean => {
    return watchLaterMovies.some(({ id }) => id === movieId);
  };

  const toggleWatchLater = (movie: MovieType) => {
    const action = isWatchLater(movie.id) ? removeFromWatchLater : addToWatchLater;
    dispatch(action(movie));
  };

  const clearWatchLaterList = () => {
    dispatch(removeAllWatchLater());
  };

  return {
    watchLaterMovies,
    isWatchLater,
    toggleWatchLater,
    clearWatchLaterList,
  };
};
