import { useSelector, useDispatch } from 'react-redux';
import starredSlice from '../data/starredSlice';

export const useStarredMovies = () => {
  const starred = useSelector((state) => state.starred);
  const dispatch = useDispatch();
  const { clearAllStarred } = starredSlice.actions;

  const clearStarredMovies = () => dispatch(clearAllStarred());

  return {
    starredMovies: starred.starredMovies,
    clearStarredMovies,
  };
};
