import { useTrailerKey } from "../hooks/useTrailerKey";
import { YoutubePlayer } from "./YoutubePlayer";

export const ViewTrailerButton = ({ movieId }) => {
  const { getTrailerKey, trailerKey } = useTrailerKey();
  const onClick = () => getTrailerKey(movieId);

  return (
    <>
      <button type="button" className="btn btn-dark" onClick={onClick}>
        View Trailer
      </button>

      <YoutubePlayer videoKey={trailerKey} />
    </>
  );
};
