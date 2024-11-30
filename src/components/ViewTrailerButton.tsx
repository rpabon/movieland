import { useSelectedMovie } from '@/hooks/useSelectedMovie';

type Props = {
  movieId: number;
};

export const ViewTrailerButton = ({ movieId }: Props) => {
  const { getSingleMovie } = useSelectedMovie();
  const onClick = () => getSingleMovie(movieId);

  return (
    <button type="button" className="btn btn-dark" onClick={onClick}>
      View Trailer
    </button>
  );
};
