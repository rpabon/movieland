import { StarButton } from "./StarButton";
import { WatchLaterButton } from "./WatchLaterButton";
import { useMovieState } from "../hooks/useMovieState";
import { ViewTrailerButton } from "./ViewTrailerButton";

export const MovieInfoPanel = ({ movie }) => {
  const { isStarred, isWatchLater, toggleStar, toggleWatchLater } =
    useMovieState();

  return (
    <div className="info_panel">
      <div className="overview">{movie.overview}</div>
      <div className="year">{movie.release_date?.substring(0, 4)}</div>
      <StarButton
        isStarred={isStarred(movie.id)}
        onClick={() => toggleStar(movie.id)}
      />
      <WatchLaterButton
        isWatchLater={isWatchLater(movie.id)}
        onClick={() => toggleWatchLater(movie)}
      />
      <ViewTrailerButton movieId={movie.id} />
    </div>
  );
};
