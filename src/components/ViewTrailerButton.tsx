import { useSelectedMovie } from '@/hooks/useSelectedMovie';

type Props = {
  movieId: number;
};

export const ViewTrailerButton = ({ movieId }: Props) => {
  const { openMovieTrailerModal } = useSelectedMovie();
  const onClick = () => openMovieTrailerModal(movieId);

  return (
    <button type="button" className="btn btn-dark" onClick={onClick}>
      View Trailer
    </button>
  );
};
