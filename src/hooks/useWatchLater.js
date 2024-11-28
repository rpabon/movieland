import { useSelector, useDispatch } from 'react-redux';
import watchLaterSlice from '../data/watchLaterSlice';

export const useWatchLater = () => {
  const watchLater = useSelector((state) => state.watchLater);
  const dispatch = useDispatch();
  const { remveAllWatchLater } = watchLaterSlice.actions;

  const clearWatchLater = () => dispatch(remveAllWatchLater());

  return {
    watchLaterMovies: watchLater.watchLaterMovies,
    clearWatchLater,
  };
};
