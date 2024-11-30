import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedMovie } from '../data/selectedMovieSlice';

export const useSelectedMovie = () => {
  const dispatch = useDispatch();
  const { movie, status, error, trailerKey } = useSelector((state) => state.selectedMovie);

  const getSingleMovie = (movieId) => {
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
