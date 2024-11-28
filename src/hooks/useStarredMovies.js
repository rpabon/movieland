import { useDispatch, useSelector } from 'react-redux';
import starredSlice from '@/data/starredSlice';

export const useStarredMovies = () => {
  const dispatch = useDispatch();
  const starredMovies = useSelector((state) => state.starred.starredMovies);
  const { starMovie, unstarMovie, clearAllStarred } = starredSlice.actions;

  const isStarred = (movieId) => {
    return starredMovies.some(({ id }) => id === movieId);
  };

  const toggleStar = (movie) => {
    const action = isStarred(movie.id) ? unstarMovie : starMovie;
    dispatch(action(movie));
  };

  const clearStarredMovies = () => {
    dispatch(clearAllStarred());
  };

  return {
    starredMovies,
    isStarred,
    toggleStar,
    clearStarredMovies,
  };
};
