import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedMovie, SelectedMovieState } from '@/data/selectedMovieSlice';
import { RootState, AppDispatch } from '@/data/store';

export const useSelectedMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movie, status, error, trailerKey } = useSelector<RootState, SelectedMovieState>(
    (state) => state.selectedMovie
  );

  const getSingleMovie = (movieId: number) => {
    dispatch(fetchSelectedMovie(movieId));
  };

  return {
    movie,
    status,
    error,
    trailerKey,
    getSingleMovie,
  };
};
