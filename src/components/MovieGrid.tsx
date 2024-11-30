import { RefCallback } from 'react';
import { Movie } from '@/components/Movie';
import { MovieType } from '@/types/MovieType';
import styles from '../styles/movie-grid.module.scss';

type Props = {
  movies: MovieType[];
  lastMovieRef?: RefCallback<HTMLDivElement> | null;
};

export const MovieGrid = ({ movies, lastMovieRef = null }: Props) => {
  return (
    <div className={styles.grid}>
      {movies.map((movie, index) => (
        <Movie
          key={movie.id}
          ref={lastMovieRef && index === movies.length - 1 ? lastMovieRef : null}
          movie={movie}
        />
      ))}
    </div>
  );
};
