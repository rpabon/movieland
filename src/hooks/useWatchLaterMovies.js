import { useDispatch, useSelector } from 'react-redux';
import watchLaterSlice from '@/data/watchLaterSlice';

export const useWatchLaterMovies = () => {
  const dispatch = useDispatch();
  const watchLaterMovies = useSelector((state) => state.watchLater.watchLaterMovies);
  const { addToWatchLater, removeFromWatchLater, remveAllWatchLater } = watchLaterSlice.actions;

  const isWatchLater = (movieId) => {
    return watchLaterMovies.some(({ id }) => id === movieId);
  };

  const toggleWatchLater = (movie) => {
    const action = isWatchLater(movie.id) ? removeFromWatchLater : addToWatchLater;
    dispatch(action(movie));
  };

  const clearWatchLaterList = () => {
    dispatch(remveAllWatchLater());
  };

  return {
    watchLaterMovies,
    isWatchLater,
    toggleWatchLater,
    clearWatchLaterList,
  };
};
