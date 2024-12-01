import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/data/store';
import selectedMovieSlice, {
  fetchSelectedMovie,
  SelectedMovieState,
} from '@/data/selectedMovieSlice';

export const useSelectedMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openModal, closeModal, clearSelectedMovie } = selectedMovieSlice.actions;
  const { movie, status, error, trailerKey, isModalOpen } = useSelector<
    RootState,
    SelectedMovieState
  >((state) => state.selectedMovie);
  const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

  const openMovieTrailerModal = (movieId: number) => {
    dispatch(fetchSelectedMovie(movieId));
    dispatch(openModal());
  };

  const closeMovieTrailerModal = () => {
    dispatch(closeModal());
    dispatch(clearSelectedMovie());
  };

  return {
    movie,
    status,
    error,
    trailerUrl,
    isModalOpen,
    openMovieTrailerModal,
    closeMovieTrailerModal,
  };
};
