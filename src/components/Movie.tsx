import { forwardRef } from 'react';
import cx from 'classnames';
import placeholder from '@/assets/not-found-500X750.jpeg';
import { MovieInfoPanel } from '@/components/MovieInfoPanel';
import { MovieType } from '@/types/MovieType';
import styles from '../styles/movie.module.scss';

type Props = {
  movie: MovieType;
};

export const Movie = forwardRef<HTMLDivElement, Props>(({ movie }, ref) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : placeholder;

  return (
    <div className={cx('card', styles.card)} ref={ref}>
      <div className="card-body text-center">
        <div className="overlay" />
        <MovieInfoPanel movie={movie} />
        <img className="center-block" src={poster} alt="Movie poster" />
      </div>

      <h6 className="title mobile-card">{movie.title}</h6>
      <h6 className="title">{movie.title}</h6>
    </div>
  );
});

Movie.displayName = 'Movie';
