import { useDispatch, useSelector } from "react-redux";
import starredSlice from "@/data/starredSlice";
import watchLaterSlice from "@/data/watchLaterSlice";

export const useMovieState = () => {
  const dispatch = useDispatch();
  const starred = useSelector((state) => state.starred);
  const watchLater = useSelector((state) => state.watchLater);
  const { starMovie, unstarMovie } = starredSlice.actions;
  const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

  const isMovieInList = (movieId, list) =>
    list.some(({ id }) => id === movieId);

  const isStarred = (movieId) => isMovieInList(movieId, starred.starredMovies);
  const isWatchLater = (movieId) =>
    isMovieInList(movieId, watchLater.watchLaterMovies);

  const toggleStar = (movie) => {
    if (isStarred(movie.id)) {
      dispatch(unstarMovie(movie));
    } else {
      dispatch(
        starMovie({
          id: movie.id,
          overview: movie.overview,
          release_date: movie.release_date?.substring(0, 4),
          poster_path: movie.poster_path,
          title: movie.title,
        })
      );
    }
  };

  const toggleWatchLater = (movie) => {
    if (isWatchLater(movie.id)) {
      dispatch(removeFromWatchLater(movie));
    } else {
      dispatch(
        addToWatchLater({
          id: movie.id,
          overview: movie.overview,
          release_date: movie.release_date?.substring(0, 4),
          poster_path: movie.poster_path,
          title: movie.title,
        })
      );
    }
  };

  return {
    isStarred,
    isWatchLater,
    toggleStar,
    toggleWatchLater,
  };
};
