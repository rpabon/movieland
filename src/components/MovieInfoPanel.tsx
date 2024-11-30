import { StarButton } from '@/components/StarButton';
import { WatchLaterButton } from '@/components/WatchLaterButton';
import { ViewTrailerButton } from '@/components/ViewTrailerButton';
import { useStarredMovies } from '@/hooks/useStarredMovies';
import { useWatchLaterMovies } from '@/hooks/useWatchLaterMovies';
import { MovieType } from '@/types/MovieType';

type Props = {
  movie: MovieType;
};

export const MovieInfoPanel = ({ movie }: Props) => {
  const { isStarred, toggleStar } = useStarredMovies();
  const { isWatchLater, toggleWatchLater } = useWatchLaterMovies();

  return (
    <div className="info_panel">
      <div className="overview">{movie.overview}</div>
      <div className="year">{movie.release_date?.substring(0, 4)}</div>
      <StarButton isStarred={isStarred(movie.id)} onClick={() => toggleStar(movie)} />
      <WatchLaterButton
        isWatchLater={isWatchLater(movie.id)}
        onClick={() => toggleWatchLater(movie)}
      />
      <ViewTrailerButton movieId={movie.id} />
    </div>
  );
};
