import { useDispatch, useSelector } from 'react-redux';
import starredSlice, { StarredState } from '@/data/starredSlice';
import { RootState, AppDispatch } from '@/data/store';
import { MovieType } from '@/types/MovieType';

export const useStarredMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const starredMovies = useSelector<RootState, StarredState['starredMovies']>(
    (state) => state.starred.starredMovies
  );
  const { starMovie, unstarMovie, clearAllStarred } = starredSlice.actions;

  const isStarred = (movieId: number): boolean => {
    return starredMovies.some(({ id }) => id === movieId);
  };

  const toggleStar = (movie: MovieType) => {
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
