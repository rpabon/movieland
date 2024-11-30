import { useSelectedMovie } from '../hooks/useSelectedMovie';

export const ViewTrailerButton = ({ movieId }) => {
  const { getSingleMovie } = useSelectedMovie();
  const onClick = () => getSingleMovie(movieId);

  return (
    <button type="button" className="btn btn-dark" onClick={onClick}>
      View Trailer
    </button>
  );
};
